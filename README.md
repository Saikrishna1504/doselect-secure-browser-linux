# DoSelect Secure Browser (Linux / Arch / CachyOS)

Patched build and packaging scripts for running DoSelect Secure Browser on Arch Linux, CachyOS, and other non-Ubuntu Linux distributions.

## Problem Description

The official Debian package for DoSelect Secure Browser (`1.0.15`) contains hardcoded operating system checks:

1. **Internal OS Check:** `checkOSCompatibility()` in `index.js` executes `lsb_release -rs` and expects an Ubuntu version number (`>= 18.04`). On rolling distributions like CachyOS or Arch Linux, `lsb_release -rs` returns `"rolling"`, causing the application to display an "OS compatibility issue" modal and terminate.
2. **Distribution Detection:** Background processes expect Ubuntu-like release identifiers.

## Fix Details

1. **`app.asar` Patch:** Modified `checkOSCompatibility` in `index.js` to evaluate to `true` on Linux platforms.
2. **`lsb_release` Compatibility Wrapper:** Added a lightweight wrapper returning `Ubuntu 22.04.4 LTS` for queries executed by the application environment.

## Installation

Pre-built binaries are available under Releases.

### Arch Linux / CachyOS / Manjaro

Download `doselect-secure-browser-1.0.15-cachyos.pkg.tar.zst` from the release assets and install via `pacman`:

```bash
sudo pacman -U doselect-secure-browser-1.0.15-cachyos.pkg.tar.zst
```

To run:

```bash
doselect-secure-browser
```

### Portable Package (Any Linux Distribution)

Download `doselect-secure-browser-portable.tar.gz` from the release assets, extract, and execute:

```bash
tar -xzf doselect-secure-browser-portable.tar.gz
cd doselect-secure-browser
./start.sh
```

## Building from Source

To build the package locally from the original `.deb` archive:

```bash
# Clone repository
git clone <repository-url>
cd doselect-secure-browser-repo

# Place original deb package in current directory as Doselect+Secure+Browser.deb
# Run makepkg
makepkg -si
```

## File Manifest

- `PKGBUILD`: Arch Linux package recipe.
- `patch.js`: Node.js script used to patch `index.js` inside `app.asar`.
- `lsb_release`: LSB release compatibility script.
- `doselect-secure-browser.desktop`: Desktop launcher specification.
