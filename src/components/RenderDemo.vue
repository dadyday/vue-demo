<script>
// https://marozed.com/vue-cheatsheet/

export default {
  render(createElement) {
    const
      tag = 'div',
      options = {
        class: {
          className: true,
          anotherClassName: false,
        },
        style: {
          fontFamily: "monospace",
        },
        attrs: {
          attrib: "value",
        },
        props: {
          property: 'value'
        },
        domProps: {
          id: 'elementId'
        },
        on: {
          // 'click.capture' or '!click': this.doThisInCapturingMode,
          // 'mouseover.once or '~mouseover': this.doThisOnce,
          // 'scroll.passive' or '&scroll': this.doThisInPassiveMode,
          // 'submit.prevent': this.doThisWithPreventDefault,
          // 'keydown.stop': this.doThisWithStopPropagation,
          // 'mousemove.self': this.doThisIfTargetIsCurrentTarget,
          // 'keypress.enter' or 'keypress.13' this.doThisIfKeyCodeIsEnterKey, (any other key code: http://keycode.info/)
          // 'keypress.ctrl': this.doThisIfCtrlKeyHold, (.ctrl, .alt, .shift, .meta)
          click: () => alert('Boo!'),
          'mousemove.once': () => console.log(this)
        },
        scopedSlots: {
          default: null
        },
        slot: "slotContent",
      },
      childs = [
        createElement('b', 'bold'),
        ' text',
      ];

    return createElement(tag, options, childs);
  },
};
</script>
