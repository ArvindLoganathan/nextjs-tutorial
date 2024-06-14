# nextjs-tutorial

next is framework . which has own router  , transform and minify . 

need node js runtime.

RSC  React server component is foundation for next js. <br>
2 types of component  server(default type) & client component.(add event, use react hooks)


Note:
1). Routes are defined based on folder structure and folder should have page.tsx file or route.tsx file. Nested route slod we need to create folder inside folder with page.tsx inside.<br>
2).For dynamic route we need to use **[id]** as folder name inside we have to add page.tsx(E:\project\nextjs-tutorial\nextdemo\app\users\[id]\page.tsx). nested dynamic route also similar pattern (rfi/rfiId/section/sectionId/question/Qid)<br>
3).**[...slug]** catch all dynamic route to handle in one page. [[...slug]]  handle optional route( **/user** doesn't have page.tst throws pagenot found error when accessed [[...slug]] will catch that not found on /user route)<br>
4). **not-found.tsx** is used to customize page not found similar **error.tst ("use client" as it executed on csr)** used for display cutom error page on browser if any error is thrown .<br>
5). if file namr start with **_** then its considered as lib not as route and alos if folder doesn't have page/route.tsx then also react router won't considered for routing. <br>
6). **(foldername)** is used for grouping of route. foldername will not be displayed in url.<br>
7). layout.tsx will always wrap the corresponding page.tsx file at each level. similarly not-found.tsx will be called close to it brfore global file.<br>FOr group layout we can add layout.tsx to route group.<br> 
8). metadata we can add title & description usesful for SEO. we can export static(static page) / dynamic metadata(dynamic page  eg:[id] use generateMetadata function). page always take preceedance over layout metadata.Between different layout near layout take precedance <br>
Title can be set by return title object as **default(falback when child route has not title meta),template(child title + title as template specied in near layout ),absolute(overide any other title )** .<br>
9).





Additional Note:
1). folder struicture act as route in next js and page.tsx file is used for routing.<br>
2). use Link instead of <a> tag as it reloads all resources.<br>
3). css file inside is not accessable for other route inorder to access need to use as global css.<br>
4). add "use Client" at top if we need browser events  (vl increase bundle size).<br>
5). avoid states and useeffect  on server as it increases bundle size.<br>
6). for production build fetch api is default {cache: 'force-cache'}, we need to either use { next: { revalidate: 3600 } } or {cache: 'no-store'} to make dynamic rerender.<br>