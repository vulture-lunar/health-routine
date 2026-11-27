const config = SAJU_PAGE;
const titleEl = document.getElementById("page-title");
titleEl.textContent = config.title;
document.title = `${config.title} | 내 고민에 맞는 사주 찾기`;
document.getElementById("footer-title").textContent = config.title;
document.getElementById("footer-copyright").textContent = `© ${config.title}`;
document.getElementById("page-description").textContent = config.description;
const introEl = document.getElementById("page-intro");
introEl.replaceChildren();
config.intro.forEach((line, index) => {
  if (index) introEl.append(document.createElement("br"));
  introEl.append(document.createTextNode(line));
});
if (config.avatar) {
  const avatar = document.getElementById("profile-avatar");
  avatar.src = config.avatar;
  avatar.alt = `${config.title} 프로필`;
  avatar.hidden = false;
  document.getElementById("profile-mark").hidden = true;
}
const listEl = document.getElementById("reading-list");
config.readings.forEach(reading => {
  const row = document.createElement("div");
  row.className = "link-row";
  const link = document.createElement("a");
  link.className = "card product-link";
  link.href = reading.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${reading.title} 보기 (새 탭)`);
  const img = document.createElement("img");
  img.className = "routine-thumb";
  img.src = reading.image;
  img.alt = reading.imageAlt || "";
  img.width = 64;
  img.height = 64;
  img.loading = "lazy";
  const copy = document.createElement("span");
  copy.className = "link-copy";
  const heading = document.createElement("strong");
  heading.className = "link-effect";
  heading.textContent = reading.title;
  const description = document.createElement("span");
  description.className = "link-detail";
  description.textContent = reading.description;
  copy.append(heading, description);
  link.append(img, copy);
  const share = document.createElement("button");
  share.type = "button";
  share.className = "link-share";
  share.setAttribute("aria-label", `${reading.title} 링크 공유`);
  share.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>';
  share.addEventListener("click", () => shareLink(reading.title, reading.url));
  row.append(link, share);
  listEl.append(row);
});
const menu = document.querySelector(".channel-menu");
menu.addEventListener("click", event => { if (event.target.closest("a")) menu.open = false; });
document.addEventListener("click", event => { if (!menu.contains(event.target)) menu.open = false; });
menu.addEventListener("keydown", event => {
  if (event.key === "Escape") { menu.open = false; menu.querySelector("summary").focus(); }
});
const shareDialog = document.getElementById("share-dialog");
const shareUrl = document.getElementById("share-url");
const shareStatus = document.getElementById("share-status");
async function shareLink(title, url) {
  if (navigator.share) {
    try { await navigator.share({title, url}); return; }
    catch (error) { if (error.name === "AbortError") return; }
  }
  shareUrl.value = url;
  shareStatus.textContent = "주소를 복사해서 공유해 주세요.";
  if (!shareDialog.open) shareDialog.showModal();
}
document.querySelector(".profile-share").addEventListener("click", () => {
  const url = new URL(location.href);
  url.search = "";
  url.hash = "";
  shareLink(config.title, url.href);
});
document.getElementById("share-close").addEventListener("click", () => shareDialog.close());
shareDialog.addEventListener("click", event => { if (event.target === shareDialog) shareDialog.close(); });
document.getElementById("share-copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(shareUrl.value); shareStatus.textContent = "링크를 복사했어요."; }
  catch { shareUrl.focus(); shareUrl.select(); shareStatus.textContent = "선택된 주소를 복사해 주세요."; }
});
