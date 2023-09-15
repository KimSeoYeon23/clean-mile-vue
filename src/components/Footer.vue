<script>

</script>

<template>
  <footer>
    <div>
      <a href="https://github.com/codestates-beb/beb-09-clean-mile" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" size="2xl"/>
      </a>
      <a href="javascript:void(0);">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2xl"/>
      </a>
      <a href="javascript:void(0);">
        <font-awesome-icon icon="envelope" size="2xl"/>
      </a>
      <a href="javascript:void(0);">
        <font-awesome-icon :icon="['fab', 'discord']" size="2xl"/>
      </a>
    </div>
    <div>
      <p>Copyright &copy; 2023 Clean Mile</p>
    </div>
  </footer>

</template>

<style lang="scss">
@import '../assets/variables.scss';

footer {
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: rgb(21 128 61);

  div {
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      a {
        color: white;
        border: 1px solid white;
        border-radius: 0.75rem;
        padding: 0.75rem;
        cursor: pointer;
      }
    }

    &:last-child {
      p {
        color: white;
        font-weight: 500;
      }
    }
  }
}
</style>