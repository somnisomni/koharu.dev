<template>
  <main>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>

    <h1>koharu.dev</h1>
    <p><code>koharu.dev</code> is owned and operated by <a href="https://somni.one" target="_blank">somni</a>, a developer and a Blue Archive player.</p>
    <br />
    <p class="light"><strong>NOTE: </strong>This site is fan-made non-profit site. NOT an official site of Blue Archive.</p>
    <p class="light">NONE of the hosted sites/applications using this domain are affiliated with NEXON Korea Corp., NEXON Games Co., Ltd., Yostar, Inc., or other related companies.</p>
    <br />
    <p class="light">Some assets of this site may not copyrighted to site owner.</p>

    <br />

    <h2>Q & A</h2>
    <div class="qna-block">
      <p><strong>Q:</strong> Why Koharu for the domain name? Is Shimoe Koharu the character you like most?</p>
      <p><strong>A:</strong> <b>Yes,</b> before <a href="https://bluearchive.fandom.com/wiki/Plana">Plana</a> get revealed. But it's true that I still like Shimoe Koharu a lot!</p>
    </div>
    <div class="qna-block">
      <p><strong>Q:</strong> Then you should register the domain name using the name of Plana, isn't it?</p>
      <p><strong>A:</strong> <b>I wanted to. Really.</b> but the domain names like <code>plana.dev</code>, <code>plana.moe</code>, and <code>plana.app</code> are already registered by others.</p>
    </div>
    <div class="qna-block">
      <p><strong>Q:</strong> I think you are lazy and/or salty to find unregistered-but-looking-good domain names of Plana.</p>
      <p><strong>A:</strong> What's wrong with you? What the heck of this question is? I have nothing to say for this question. Period.</p>
    </div>
    <div class="qna-block">
      <p><strong>Q:</strong> Okay, nevermind. What's the purpose of this domain name by the way?</p>
      <p><strong>A:</strong> This domain name will be used as <b>the hub of my deployed toy projects.</b> Most of my toy projects will be deployed using this domain name.</p>
    </div>
    <div class="qna-block">
      <p><strong>Q:</strong> I'm interested in buying this domain name.</p>
      <p><strong>A:</strong> Then you are on a very nice chance! I'll happily hand over this domain to you as you accept at least one of these offers:</p>
      <ol style="margin-left: 2.33em">
        <li>Pay US$585,858 or KR₩585,858,585<br />
            <span class="light">(pay it in full, all at once, for sure. You have to pay any fees or taxes too)</span></li>
        <li>Exchange with your own domain which named as Plana<br />
            <span class="light">(domain name should be <code>plana</code>, TLD should be one of <code>.dev</code>, <code>.app</code>, <code>.work</code>, <code>.one</code>, <code>.me</code>, <code>.moe</code>)</span></li>
        <li>Bring Plana or Arona or Shimoe Koharu or Yutori Natsu or Takanashi Hoshino to me, in real life, in organic lifeform<br />
            <span class="light">(no matter what character you brought, the character and me must like and become a best friend for each other)</span></li>
        <li>Bring me to Kivotos, and make me the teacher who every waifu girls like and can see them everyday</li>
      </ol>
      <p>If you still interested in, email me at <code>&lt;contact (at) koharu.dev&gt;</code>.</p>
    </div>
    <div class="qna-block">
      <p><strong>Q:</strong> Any last words?</p>
      <p><strong>A:</strong> <b>I LOVE YOU, PLANA. 🤍</b></p>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component({})
export default class AboutPage extends Vue { }
</script>

<style lang="scss" scoped>
div.qna-block {
  margin: 0.25em 0;
  padding: 0.5em 0;
}

.light { font-weight: 200; color: #828282; }
</style>
