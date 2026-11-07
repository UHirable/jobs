// CV templates page: count downloads per template, then show the "Your CV is ready" window.
(() => {
  const count = (path, title) => { try { if (window.goatcounter && goatcounter.count) goatcounter.count({ path, title, event: true }); } catch (e) {} };
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a"); if (!a) return;
    const tpl = ((a.getAttribute("href") || "").match(/cv-template-([a-z0-9-]+)\.docx/) || [])[1];
    if (!tpl) return;
    count(`download/${tpl}-word`, `Download CV template: ${tpl} (Word)`);
    if (window.UHNextStep) window.UHNextStep("templates");
  });
})();
