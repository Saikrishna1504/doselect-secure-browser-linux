# Maintainer: Doselect <Doselect@doselect.com>
pkgname=doselect-secure-browser
pkgver=1.0.15
pkgrel=2
pkgdesc="Doselect Secure Browser (Patched for CachyOS / Arch Linux)"
arch=('x86_64')
url="https://doselect.com"
license=('MIT')
depends=('gtk3' 'libnotify' 'nss' 'libxss' 'libxtst' 'xdg-utils' 'at-spi2-core' 'libsecret')
source=("Doselect+Secure+Browser.deb"
        "app.asar")
sha256sums=('716d80a55e350cefe5c2ea65bf50cc6c89523684da604ae67a7bbc7acda83c00'
            'SKIP')

prepare() {
  cd "${srcdir}"
  ar x "Doselect+Secure+Browser.deb"
}

package() {
  cd "${srcdir}"
  tar -xf data.tar.xz -C "${pkgdir}"
  cp -f "${srcdir}/app.asar" "${pkgdir}/opt/Doselect Secure Browser/resources/app.asar"
  install -dm755 "${pkgdir}/usr/bin"
  ln -sf "/opt/Doselect Secure Browser/doselect-secure-browser" "${pkgdir}/usr/bin/doselect-secure-browser"
}
