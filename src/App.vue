<template>
  <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-1 sm:px-6" aria-label="Global">
    <div class="flex flex-col md:flex-row items-center flex-1">
      <div class="flex items-center justify-center sm:justify-start w-full md:w-auto">
        <a class="flex items-center" href="/">
          <img class="h-20 md:h-24 w-auto mr-2 md:mr-6" src="./assets/logo.svg" alt="">
          <span class="text-xl md:text-2xl font-family-pixelated flex ">
              <span class="text-blue-500">Framed</span><span class="ml-2">Punks</span>
          </span>
        </a>
      </div>
      <div class="md:ml-10 md:space-x-10 flex items-center">
        <span class="font-family-cursive hidden lg:inline">
          Purveyors of the finest handcrafted frames for your NFTs
        </span>
      </div>
    </div>
  </nav>
  <router-view/>
  
</template>

<style>

</style>
