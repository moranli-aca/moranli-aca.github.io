#!/usr/bin/env python3
"""Refresh the Google Scholar citation count used by the Jekyll site."""

from __future__ import annotations

import datetime as dt
import pathlib
import re
import sys
import urllib.error
import urllib.request


PROFILE_URL = "https://scholar.google.com/citations?user=8pvT01UAAAAJ&hl=en"
OUTPUT = pathlib.Path(__file__).parents[1] / "_data" / "scholar.yml"


def fetch_citations() -> int:
    request = urllib.request.Request(
        PROFILE_URL,
        headers={"User-Agent": "Mozilla/5.0 (compatible; academic-homepage-metrics/1.0)"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        html = response.read().decode("utf-8")

    match = re.search(r"Cited by\s*([\d,]+)", html)
    if not match:
        raise RuntimeError("Could not find the citation count in the Scholar profile")
    return int(match.group(1).replace(",", ""))


def main() -> None:
    try:
        citations = fetch_citations()
    except (urllib.error.URLError, TimeoutError, RuntimeError, UnicodeError) as error:
        print(
            f"::warning title=Google Scholar update skipped::{error}. "
            "Keeping the last known citation count.",
            file=sys.stderr,
        )
        return

    updated_at = dt.datetime.now(dt.timezone.utc).date().isoformat()
    OUTPUT.write_text(
        f'citations: {citations}\nupdated_at: "{updated_at}"\n',
        encoding="utf-8",
    )
    print(f"Updated Scholar citations to {citations}")


if __name__ == "__main__":
    main()
