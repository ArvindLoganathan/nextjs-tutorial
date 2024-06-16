# nextjs-tutorial

next is framework . which has own router  , transform and minify . 

need node js runtime.

RSC  React server component is foundation for next js. <br>
2 types of component  server(default type) & client component.(add event, use react hooks)


Note:
1). Routes are defined based on folder structure and folder should have page.tsx file or route.tsx file. Nested route slod we need to create folder inside folder with page.tsx inside.<br>
2).For dynamic route we need to use **[id]** as folder name inside we have to add page.tsx(E:\project\nextjs-tutorial\nextdemo\app\users\[id]\page.tsx). nested dynamic route also similar pattern (rfi/rfiId/section/sectionId/question/Qid)<br>
3).**[...slug]** catch all dynamic route to handle in one page. [[...slug]]  handle optional route( **/user** doesn't have page.tst throws pagenot found error when accessed [[...slug]] will catch that not found on /user route)<br>
4). **not-found.tsx** is used to customize page not found similar **error.tst ("use client" as it executed on csr)** used for display cutom error page(also provide reset function to reset screen ) on browser if any error is thrown then bubbled to nearest error.tsx. if error in layout it will bubbled to parent level to to same level.<br>
5). if file namr start with **_** then its considered as lib not as route and alos if folder doesn't have page/route.tsx then also react router won't considered for routing. <br>
6). **(foldername)** is used for grouping of route. foldername will not be displayed in url.<br>
7). layout.tsx will always wrap the corresponding page.tsx file at each level. similarly not-found.tsx will be called close to it brfore global file.<br>FOr group layout we can add layout.tsx to route group.<br> 
8). metadata we can add title & description usesful for SEO. we can export static(static page) / dynamic metadata(dynamic page  eg:[id] use generateMetadata function). page always take preceedance over layout metadata.Between different layout near layout take precedance.metadata cannot be present inside client component <br>
Title can be set by return title object as **default(falback when child route has not title meta),template(child title + title as template specied in near layout ),absolute(overide any other title )** .<br>
9). to show Active link in browser we can use **usePathname()** but component should be clinet("use client") 
const pathName=usePathname();
const isActive=pathName.startswith('dashboard') // then css work <br>
10).Layout preserve state where **Template.tsx** doesn't preserve state it remount when route change.Template create a new instance. if we have both then layout wraps template with page.<br>
11). Loading.tsx file create a suspence of page.tsx to show loading inncase of async call.<br>
12). **Parallel Routes** like questionnaire page in gartner(sidebar & main content).**@** symbol is used t0 crate a **slot**. parallel route preserve previous state while navigation, but on hard refresh it looks for **default.js** file if exist render or else page not found-404  <br>
**default.js** file act as fallback slot on current url so need to create default.tsx file on slot.(E:\project\nextjs-tutorial\nextdemo\app\question).<br>
13).Intersepting route is used to intercept route from orgin to point to specified position route(.(same level),..(one level up)) based on folder name present. if hard refresh is done then it should point to original route.


<br>
Additional Note:<br>
1). folder struicture act as route in next js and page.tsx file is used for routing.<br>
2). use Link instead of <a> tag as it reloads all resources.<br>
3). css file inside is not accessable for other route inorder to access need to use as global css.<br>
4). add "use Client" at top if we need browser events  (vl increase bundle size).<br>
5). avoid states and useeffect  on server as it increases bundle size.<br>
6). for production build fetch api is default {cache: 'force-cache'}, we need to either use { next: { revalidate: 3600 } } or {cache: 'no-store'} to make dynamic rerender.<br>