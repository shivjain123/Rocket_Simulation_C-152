AFRAME.registerComponent("rocket", {
    schema: {moveY: {type: "number", default: 1}},
    tick:function(){
        var pos = this.el.getAttribute("position");
        this.data.moveY += 0.01
        pos.y = this.data.moveY
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
    }
})
AFRAME.registerComponent("camera", {
    schema: { moveZ: { type: "number", default: 10 } },
    tick: function () {
        var pos = this.el.getAttribute("position");
        this.data.moveZ += 0.01
        pos.z = this.data.moveZ
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }
})
AFRAME.registerComponent("fallDown", {
    schema: { moveY: { type: "number", default: 0 }},
    tick: function() {
        window.addEventListener("click", e => {
            this.data.moveY -= 0.001
        })
        var pos = this.el.getAttribute("position");
        pos.y = pos.y + this.data.moveY
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }
})