<template>
  <header class="header">
    <div>
      로고 이미지
    </div>
    <div class="category-wrapper">
      <nav>
        <ul class="category">
          <li>Info</li>
          <li>Notice</li>
          <li>Events</li>
          <li>Community</li>
        </ul>
      </nav>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background-color: white;
}

.category-wrapper {
  display: flex;
}

.category {
  display: flex;
  list-style: none;
}

</style>