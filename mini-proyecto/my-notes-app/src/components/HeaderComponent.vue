<script scoped>

</script>

<template>
    <header>
        <h1 class="title">NotesPage</h1>
        <nav>
            <ul class="nav-list">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/notes">Notes</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
  header {
    padding: 15px 30px;
    background-color: #1f1f1f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: white;
    }
    nav {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        list-style: none;
        li {
          a {
            background-color: rgba(255,255,255, .2);
            padding: 8px 12px;
            border-radius: 4px;
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }
</style>