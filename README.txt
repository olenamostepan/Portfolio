OLENA MOSTEPAN — PORTFOLIO SITE
================================

Files
  index.html   the page (don't need to touch)
  data.js      ALL the content: projects, texts (UA + EN), About page
  style.css    the look
  app.js       how it works (routing, language switch, grid view)
  img/         your images
  cv.pdf       add your CV here with this exact name

To add or change a project
  1. Put the images into /img (JPG, ~2000px wide max, under 500 KB each).
  2. Open data.js and edit or copy one project block.
     - index:   images shown in the scrolling list on the home page
     - hero:    the big image inside the white case study card
     - gallery: images below it; span 3 = quarter, 4 = third, 6 = half, 12 = full width
  3. Project order in data.js = order on the site (numbers update themselves).

Put it online with Vercel (free)
  1. Sign up at vercel.com (e.g. with Google or GitHub).
  2. Go to vercel.com/new, choose the option to deploy without Git / drag and drop
     (or install the CLI: npm i -g vercel, then run `vercel` inside this folder).
  3. Drop this whole folder. You get a link like your-name.vercel.app.
  4. To update later: drop the folder again (or run `vercel --prod`).
  Netlify works the same way: app.netlify.com/drop

Links you can send
  Home:          https://your-site.vercel.app/
  Case study:    https://your-site.vercel.app/#social-entrepreneurship
  About:         https://your-site.vercel.app/#about
