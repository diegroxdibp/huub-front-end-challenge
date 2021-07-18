export function backToTop(): void {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
