(function () {
  //    data-adsbygoogle-status="done" data-ad-status="filled"
  const render = (el) => {
    requestAnimationFrame(() => {
      const { width, height } = el.parentNode.getBoundingClientRect();

      const div = document.createElement("div");
      div.style =
        style = `position: relative; width: ${width}px; height: ${height}px; margin: 0; padding: 0; background-color: transparent; border: 0;`;

      const iframe = document.createElement("iframe");
      iframe.src = `/iframe?slot=${el.dataset.adSlot}`;
      iframe.style = `position: absolute; left:0; top:0; right: 0; width: ${width}px; height: ${height}px;`;
      iframe.sandbox = `allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation`;
      iframe.allowtransparency = true;
      iframe.width = width;
      iframe.height = height;

      iframe.addEventListener("load", () => {
        console.log("iframe loaded!");
        iframe.dataset.loadComplete = "true";
        el.dataset.adStatus = "filled";
      });

      el.appendChild(div);
      el.dataset.adsbygoogleStatus = "done";

      div.appendChild(iframe);
    });
  };

  const findTarget = () => {
    const list = [...document.querySelectorAll("ins.dd")];
    return list.find(
      (el) =>
        !el.dataset.adsbygoogleStatus ||
        el.dataset.adsbygoogleStatus !== "done",
    );
  };

  const push = () => {
    Promise.resolve()
      // .then(() => new Promise((r) => setTimeout(r, 0))) // 多一层延迟，等 React commit
      .then(() => {
        requestAnimationFrame(() => {
          const renderIns = findTarget();
          if (!renderIns) return;

          renderIns.dataset.adsbygoogleStatus = "done";
          render(renderIns);
        });
      });
  };

  window.dd = [];
  window.dd.push = push;
})();
