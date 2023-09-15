<template>
  <header class="header">
    <div class="logo-wrap">
      <img src="../assets/images/clean_mile_logo_2.png" alt="로고 이미지" />
    </div>
    <div class="category-wrap">
      <nav>
        <ul class="category">
          <li>Info</li>
          <li>Notice</li>
          <li>Events</li>
          <li>Community</li>
        </ul>
      </nav>
      <div class="btn-wrap">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background-color: white;
  border-bottom: 1px solid rgb(107 114 128 / 0.2);

  .logo-wrap {
    width: 20%;
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
  }

  .category-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    .category {
      display: flex;
      gap: 3.5rem;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          color: $main-green;
        }
      }
    }
  }
}

.btn-wrap {
  display: flex;
  gap: 1rem;

  button {
    &:first-child {
      color: $main-yellow;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      padding: 0.5rem 1rem;

      &:hover {
        color: black;
        background-color: $main-yellow;
        border-radius: 0.5rem;
      }
    }

    &:last-child {
      color: rgb(107 114 128);
      background-color: $main-green;
      border: none;
      border-radius: 0.5rem;
      transition: all 0.3s;
      cursor: pointer;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: rgb(22 163 74);
        color: white;
      }
    }
  }
}

</style>