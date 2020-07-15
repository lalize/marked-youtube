import marked, { Renderer } from "marked";
import { createRenderer, addReplacer } from "./lib/custom-renderer";
import youtubeReplacer from "./lib/youtube-replacer";

addReplacer("youtube", youtubeReplacer);
marked.use({ renderer: <Renderer>createRenderer() });

console.log(
  marked(`
\`\`\`youtube
src=https://www.youtube.com/watch?v=TgOu00Mf3kI
width=300
height=200
\`\`\`


\`\`\`youtube
src=youtu.be/TgOu00Mf3kI
\`\`\`


\`\`\`youtube
src=TgOu00Mf3kI
\`\`\`
`)
);
