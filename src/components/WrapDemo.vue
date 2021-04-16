<template>
  <div>

    All childs will be wrapped, but not the given tag
    <ol><Wrap each="li">
      Will be wrapped
      <b>Will be wrapped</b>
      <li style="color:green">Already wrapped</li>
    </Wrap></ol>

    All childs will be wrapped, even the given tag
    <ol><Wrap each="li" force>
      Will be wrapped
      <b>Will be wrapped</b>
      <li style="color:orange">Will be double wrapped</li>
    </Wrap></ol>

    All childs will be replaced
    <ol><Wrap each="li" replace>
      Will be wrapped
      <b>Will be replaced</b>
      <li style="color:red">Will be replaced</li>
    </Wrap></ol>

    Even works with subcomponents
    <ol><Wrap each="WrapDemoItem">
      Will be wrapped
      <b>Will be wrapped</b>
      <WrapDemoItem attr="there">Already wrapped</WrapDemoItem>
    </Wrap></ol>

    Works with template slot
    <ol><Wrap each="WrapDemoItem">
      will be wrapped
      <b>will be wrapped</b>
      <i></i>
      <WrapDemoItem>Already wrapped</WrapDemoItem>

      <template #each attr="todo">
        <b>Here </b>
        <each>will be default</each>
        text
      </template>
    </Wrap></ol>

  </div>
</template>
