#!/usr/bin/env python3
"""Download all images from the Bubble export to public/images/"""

import os
import urllib.request
import urllib.parse
import json
import re
from pathlib import Path

# Image mappings: S3 URL pattern -> local path
IMAGE_MAPPINGS = {
    # Logo
    "Playcrafting%20Logo%20Normal.jpg": "logo.jpg",
    "Playcrafting_Logo_400x400.png": "logo-square.png",
    "playcrafting.png": "logo-alt.png",

    # Client logos
    "nfl.png": "clients/nfl.png",
    "Niantic_Labs_logo.svg.png": "clients/niantic.png",
    "Rockstar%20Logo.png": "clients/rockstar.png",
    "Verizon-Logo-2000.png": "clients/verizon.png",
    "asus.png": "clients/asus.png",
    "meta.png": "clients/meta.png",
    "IBM_logo_in.jpeg": "clients/ibm.png",
    "Schick-Logo.png": "clients/schick.png",
    "Bose-logo.png": "clients/bose.png",
    "Unreal_Engine_Logo.svg.png": "clients/unreal.png",
    "dolby.webp": "clients/dolby.webp",
    "edelman-110565-9b95aa8e422cb89bc8aacd7daaefc75b.png": "clients/edelman.png",
    "stadia_logo_and_text_v1.jpeg": "clients/stadia.png",

    # Social icons
    "twitter.png": "social/twitter.png",
    "insta.png": "social/insta.png",
    "discord.png": "social/discord.png",
    "yt.svg": "social/yt.svg",
    "linkedin%20logo%20good.png": "social/linkedin.png",
    "twitch.png": "social/twitch.png",

    # Case study banners
    "Schick%20Case%20Study%20Banner.png": "case-studies/schick-banner.png",
    "Stadia%20Case%20Study%20Banner.png": "case-studies/stadia-banner.png",
    "ROG%20Case%20Study%20Banner.png": "case-studies/rog-banner.png",

    # Case study screenshots/images
    "schick-screenshot.png": "case-studies/schick-screenshot.png",
    "Play-Anywhere-1.png": "case-studies/stadia-screenshot.png",

    # Game GIFs
    "BUshido.gif": "games/bushido.gif",
    "dogwalker.gif": "games/dogwalker.gif",
    "geofront.gif": "games/geofront.gif",
    "prideprej.gif": "games/prideprej.gif",
    "weird.gif": "games/weird.gif",
    "bots.gif": "games/bots.gif",
    "shrimpin.gif": "games/shrimpin.gif",
    "cue.gif": "games/cue.gif",
    "fragments.gif": "games/fragments.gif",
    "cheese.gif": "games/cheese.gif",
    "asusgame1.gif": "games/asus-game1.gif",

    # Backgrounds and misc
    "URL%20Preview%20Image%20%E2%80%93%20Meta%20%E2%80%93%20Tagline.pngng": "misc/og-image.png",
    "playnyc.jpeg": "misc/playnyc.jpeg",
    "playcrafting%20collage.png": "misc/collage.png",
    "Play%20NYC%202021_Logo.png": "misc/playnyc-logo.png",
    "play%20nyc%20crowd%202.jpeg": "misc/playnyc-crowd.jpeg",
    "We%20don%27t%20just%20talk%20a%20good%20game.%20We%20build%20them.%20%282%29.png": "misc/hero-text.png",
    "Playcrafting%20Interstitial%20Background%20%281%29.png": "misc/interstitial-bg.png",
    "The%20Power%20of%20Play%20-%201841x946.png": "misc/power-of-play.png",
    "Work%20Background%20-%202048%20x%201024.png": "misc/work-bg.png",
}

def download_image(url, local_path):
    """Download an image from URL to local path."""
    try:
        # Ensure directory exists
        os.makedirs(os.path.dirname(local_path), exist_ok=True)

        # Add https: if URL starts with //
        if url.startswith("//"):
            url = "https:" + url

        print(f"Downloading: {os.path.basename(local_path)}")
        urllib.request.urlretrieve(url, local_path)
        return True
    except Exception as e:
        print(f"  Error downloading {url}: {e}")
        return False

def main():
    # Base paths
    script_dir = Path(__file__).parent
    public_dir = script_dir.parent / "public" / "images"
    bubble_file = script_dir.parent.parent / "playcrafting.bubble"

    # Read bubble file to extract all URLs
    with open(bubble_file, 'r') as f:
        content = f.read()

    # Find all S3 URLs
    urls = re.findall(r'//s3\.amazonaws\.com/appforest_uf/[^"]+', content)
    unique_urls = sorted(set(urls))

    print(f"Found {len(unique_urls)} unique image URLs")
    print("=" * 50)

    downloaded = 0
    failed = 0

    for url in unique_urls:
        # Get filename from URL
        filename = url.split("/")[-1]

        # Check if we have a mapping for this file
        local_filename = IMAGE_MAPPINGS.get(filename)

        if local_filename:
            local_path = public_dir / local_filename
            if download_image("https:" + url, str(local_path)):
                downloaded += 1
            else:
                failed += 1
        else:
            # Unmapped file - save to misc
            decoded_filename = urllib.parse.unquote(filename)
            # Clean up filename
            safe_filename = re.sub(r'[^\w\-_\.]', '_', decoded_filename)
            local_path = public_dir / "misc" / safe_filename
            if download_image("https:" + url, str(local_path)):
                downloaded += 1
            else:
                failed += 1

    print("=" * 50)
    print(f"Downloaded: {downloaded}")
    print(f"Failed: {failed}")

if __name__ == "__main__":
    main()
