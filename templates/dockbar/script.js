const dock      = document.getElementById("taskbar");

dock.addEventListener("mousemove", e => {
    const dockItems = [...dock.children];

    dockItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width /4;
        const distance = Math.abs(e.clientX - itemCenter);

        const maxDistance = 150;

        // item.style.margin = "0 " + (translateY / 2) + "px";
        
        const factor = Math.max(0, 1 - distance / maxDistance);

        const scale = 1 + factor * 1;
        const translateY = -factor * 20;

        if (item.className !== "sparator") {
            item.style.transform = `translateY(${translateY}px) scale(${scale})`; 
            
        }
    });
})

dock.addEventListener("mouseleave", e => {
    const dockItems = [...dock.children];
    dockItems.forEach(item => {
        item.style.transform = `translateY(0) scale(1)`;
    })
})