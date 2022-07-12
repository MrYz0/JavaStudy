import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as m,a as e,b as d,e as n,d as i}from"./app.56b03e2c.js";var v="/JavaStudy/images/MySQL/MySQL-76.png",c="/JavaStudy/images/MySQL/MySQL-77.png",t="/JavaStudy/images/MySQL/MySQL-78.png",u="/JavaStudy/images/MySQL/MySQL-79.png",p="/JavaStudy/images/MySQL/MySQL-80.png",o="/JavaStudy/images/MySQL/MySQL-81.png",b="/JavaStudy/images/MySQL/MySQL-82.png",g="/JavaStudy/images/MySQL/MySQL-83.png",h="/JavaStudy/images/MySQL/MySQL-84.png",y="/JavaStudy/images/MySQL/MySQL-85.png",q="/JavaStudy/images/MySQL/\u5185\u8FDE\u63A5.png",_="/JavaStudy/images/MySQL/MySQL-86.png",f="/JavaStudy/images/MySQL/MySQL-87.png",S="/JavaStudy/images/MySQL/MySQL-88.png",L="/JavaStudy/images/MySQL/MySQL-89.png",x="/JavaStudy/images/MySQL/MySQL-90.png",w="/JavaStudy/images/MySQL/MySQL-91.png";const E={},M=n('<h1 id="\u591A\u8868\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2</h1><h2 id="\u591A\u8868\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u5173\u7CFB" aria-hidden="true">#</a> \u591A\u8868\u5173\u7CFB</h2><p>\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u5728\u8FDB\u884C\u6570\u636E\u5E93\u8868\u7ED3\u6784\u8BBE\u8BA1\u65F6\uFF0C\u4F1A\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u53CA\u4E1A\u52A1\u6A21\u5757\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5206\u6790\u5E76\u8BBE\u8BA1\u8868\u7ED3</p><p>\u6784\uFF0C\u7531\u4E8E\u4E1A\u52A1\u4E4B\u95F4\u76F8\u4E92\u5173\u8054\uFF0C\u6240\u4EE5\u5404\u4E2A\u8868\u7ED3\u6784\u4E4B\u95F4\u4E5F\u5B58\u5728\u7740\u5404\u79CD\u8054\u7CFB\uFF0C\u57FA\u672C\u4E0A\u5206\u4E3A\u4E09\u79CD\uFF1A</p><ul><li>\u4E00\u5BF9\u591A\uFF08\u591A\u5BF9\u4E00\uFF09</li><li>\u591A\u5BF9\u591A</li><li>\u4E00\u5BF9\u4E00</li></ul><h3 id="\u4E00\u5BF9\u591A" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5BF9\u591A" aria-hidden="true">#</a> \u4E00\u5BF9\u591A</h3><ul><li>\u6848\u4F8B\uFF1A\u90E8\u95E8\u4E0E\u5458\u5DE5\u7684\u5173\u7CFB</li><li>\u5173\u7CFB: \u4E00\u4E2A\u90E8\u95E8\u5BF9\u5E94\u591A\u4E2A\u5458\u5DE5\uFF0C\u4E00\u4E2A\u5458\u5DE5\u5BF9\u5E94\u4E00\u4E2A\u90E8\u95E8</li><li>\u5B9E\u73B0: \u5728\u591A\u7684\u4E00\u65B9\u5EFA\u7ACB\u5916\u952E\uFF0C\u6307\u5411\u4E00\u7684\u4E00\u65B9\u7684\u4E3B\u952E</li></ul><p><img src="'+v+'" alt="1653647056460" loading="lazy"></p><h3 id="\u591A\u5BF9\u591A" tabindex="-1"><a class="header-anchor" href="#\u591A\u5BF9\u591A" aria-hidden="true">#</a> \u591A\u5BF9\u591A</h3><ul><li><p>\u6848\u4F8B: \u5B66\u751F\u4E0E\u8BFE\u7A0B\u7684\u5173\u7CFB</p></li><li><p>\u5173\u7CFB: \u4E00\u4E2A\u5B66\u751F\u53EF\u4EE5\u9009\u4FEE\u591A\u95E8\u8BFE\u7A0B\uFF0C\u4E00\u95E8\u8BFE\u7A0B\u4E5F\u53EF\u4EE5\u4F9B\u591A\u4E2A\u5B66\u751F\u9009\u62E9</p></li><li><p>\u5B9E\u73B0: \u5EFA\u7ACB\u7B2C\u4E09\u5F20\u4E2D\u95F4\u8868\uFF0C\u4E2D\u95F4\u8868\u81F3\u5C11\u5305\u542B\u4E24\u4E2A\u5916\u952E\uFF0C\u5206\u522B\u5173\u8054\u4E24\u65B9\u4E3B\u952E</p></li></ul><p><img src="'+c+`" alt="1653647431754" loading="lazy"></p><p><strong>\u5BF9\u5E94\u7684SQL\u811A\u672C:</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create table student(
    id int auto_increment primary key comment &#39;\u4E3B\u952EID&#39;,
    name varchar(10) comment &#39;\u59D3\u540D&#39;,
    no varchar(10) comment &#39;\u5B66\u53F7&#39;
) comment &#39;\u5B66\u751F\u8868&#39;;
insert into student values (null, &#39;\u9EDB\u7EEE\u4E1D&#39;, &#39;2000100101&#39;),(null, &#39;\u8C22\u900A&#39;, &#39;2000100102&#39;),
                           (null, &#39;\u6BB7\u5929\u6B63&#39;, &#39;2000100103&#39;),(null, &#39;\u97E6\u4E00\u7B11&#39;, &#39;2000100104&#39;);
create table course(
    id int auto_increment primary key comment &#39;\u4E3B\u952EID&#39;,
    name varchar(10) comment &#39;\u8BFE\u7A0B\u540D\u79F0&#39;
) comment &#39;\u8BFE\u7A0B\u8868&#39;;
insert into course values (null, &#39;Java&#39;),
                          (null, &#39;PHP&#39;),
                          (null , &#39;MySQL&#39;)
                          , (null, &#39;Hadoop&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E00\u5BF9\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5BF9\u4E00" aria-hidden="true">#</a> \u4E00\u5BF9\u4E00</h3><ul><li><p>\u6848\u4F8B: \u7528\u6237\u4E0E\u7528\u6237\u8BE6\u60C5\u7684\u5173\u7CFB</p></li><li><p>\u5173\u7CFB: \u4E00\u5BF9\u4E00\u5173\u7CFB\uFF0C\u591A\u7528\u4E8E\u5355\u8868\u62C6\u5206\uFF0C\u5C06\u4E00\u5F20\u8868\u7684\u57FA\u7840\u5B57\u6BB5\u653E\u5728\u4E00\u5F20\u8868\u4E2D\uFF0C\u5176\u4ED6\u8BE6\u60C5\u5B57\u6BB5\u653E\u5728\u53E6\u4E00\u5F20\u8868\u4E2D\uFF0C\u4EE5\u63D0\u5347\u64CD\u4F5C\u6548\u7387</p></li><li><p>\u5B9E\u73B0: <strong>\u5728\u4EFB\u610F\u4E00\u65B9\u52A0\u5165\u5916\u952E\uFF0C\u5173\u8054\u53E6\u5916\u4E00\u65B9\u7684\u4E3B\u952E\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u5916\u952E\u4E3A\u552F\u4E00\u7684(UNIQUE)</strong></p></li></ul><p><img src="`+t+`" alt="1653647725138" loading="lazy"></p><p>\u5BF9\u5E94\u7684SQL\u811A\u672C:</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create table tb_user(
    id int auto_increment primary key comment &#39;\u4E3B\u952EID&#39;,
    name varchar(10) comment &#39;\u59D3\u540D&#39;, age int comment &#39;\u5E74\u9F84&#39;,
    gender char(1) comment &#39;1: \u7537 , 2: \u5973&#39;,
    phone char(11) comment &#39;\u624B\u673A\u53F7&#39;
) comment &#39;\u7528\u6237\u57FA\u672C\u4FE1\u606F\u8868&#39;;

create table tb_user_edu(
    id int auto_increment primary key comment &#39;\u4E3B\u952EID&#39;,
    degree varchar(20) comment &#39;\u5B66\u5386&#39;,
    major varchar(50) comment &#39;\u4E13\u4E1A&#39;,
    primaryschool varchar(50) comment &#39;\u5C0F\u5B66&#39;,
    middleschool varchar(50) comment &#39;\u4E2D\u5B66&#39;,
    university varchar(50) comment &#39;\u5927\u5B66&#39;,
    userid int unique comment &#39;\u7528\u6237ID&#39;,
    constraint fk_userid foreign key (userid) references tb_user(id)
) comment &#39;\u7528\u6237\u6559\u80B2\u4FE1\u606F\u8868&#39;;

insert into tb_user(id, name, age, gender, phone) values
             (null,&#39;\u9EC4\u6E24&#39;,45,&#39;1&#39;,&#39;18800001111&#39;),
             (null,&#39;\u51B0\u51B0&#39;,35,&#39;2&#39;,&#39;18800002222&#39;),
             (null,&#39;\u7801\u4E91&#39;,55,&#39;1&#39;,&#39;18800008888&#39;),
             (null,&#39;\u674E\u5F66\u5B8F&#39;,50,&#39;1&#39;,&#39;18800009999&#39;);
             
insert into tb_user_edu(id, degree, major, primaryschool, middleschool, university, userid) values
             (null,&#39;\u672C\u79D1&#39;,&#39;\u821E\u8E48&#39;,&#39;\u9759\u5B89\u533A\u7B2C\u4E00\u5C0F\u5B66&#39;,&#39;\u9759\u5B89\u533A\u7B2C\u4E00\u4E2D\u5B66&#39;,&#39;\u5317\u4EAC\u821E\u8E48\u5B66\u9662&#39;,1),
             (null,&#39;\u7855\u58EB&#39;,&#39;\u8868\u6F14&#39;,&#39;\u671D\u9633\u533A\u7B2C\u4E00\u5C0F\u5B66&#39;,&#39;\u671D\u9633\u533A\u7B2C\u4E00\u4E2D\u5B66&#39;,&#39;\u5317\u4EAC\u7535\u5F71\u5B66\u9662&#39;,2),
             (null,&#39;\u672C\u79D1&#39;,&#39;\u82F1\u8BED&#39;,&#39;\u676D\u5DDE\u5E02\u7B2C\u4E00\u5C0F\u5B66&#39;,&#39;\u676D\u5DDE\u5E02\u7B2C\u4E00\u4E2D\u5B66&#39;,&#39;\u676D\u5DDE\u5E08\u8303\u5927\u5B66&#39;,3),
             (null,&#39;\u672C\u79D1&#39;,&#39;\u5E94\u7528\u6570\u5B66&#39;,&#39;\u9633\u6CC9\u7B2C\u4E00\u5C0F\u5B66&#39;,&#39;\u9633\u6CC9\u533A\u7B2C\u4E00\u4E2D\u5B66&#39;,&#39;\u6E05\u534E\u5927\u5B66&#39;,4);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="1653649151488" loading="lazy"></p><h2 id="\u591A\u8868\u67E5\u8BE2\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2\u6982\u8FF0" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2\u6982\u8FF0</h2><h3 id="\u6570\u636E\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u51C6\u5907" aria-hidden="true">#</a> \u6570\u636E\u51C6\u5907</h3><p>\u6570\u636E\u811A\u672C</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u521B\u5EFAdept\u8868\uFF0C\u5E76\u63D2\u5165\u6570\u636E
create table dept(
    id int auto_increment comment &#39;ID&#39; primary key,
    name varchar(50) not null comment &#39;\u90E8\u95E8\u540D\u79F0&#39;
)comment &#39;\u90E8\u95E8\u8868&#39;;
-- \u521B\u5EFAemp\u8868\uFF0C\u5E76\u63D2\u5165\u6570\u636E
INSERT INTO dept (id, name) VALUES
         (1, &#39;\u7814\u53D1\u90E8&#39;),
         (2, &#39;\u5E02\u573A\u90E8&#39;),
         (3, &#39;\u8D22\u52A1\u90E8&#39;),
         (4, &#39;\u9500\u552E\u90E8&#39;),
         (5, &#39;\u603B\u7ECF\u529E&#39;), (6, &#39;\u4EBA\u4E8B\u90E8&#39;);
create table emp(
    id int auto_increment comment &#39;ID&#39; primary key,
    name varchar(50) not null comment &#39;\u59D3\u540D&#39;,
    age int comment &#39;\u5E74\u9F84&#39;, job varchar(20) comment &#39;\u804C\u4F4D&#39;,
    salary int comment &#39;\u85AA\u8D44&#39;,
    entrydate date comment &#39;\u5165\u804C\u65F6\u95F4&#39;,
    managerid int comment &#39;\u76F4\u5C5E\u9886\u5BFCID&#39;,
    dept_id int comment &#39;\u90E8\u95E8ID&#39;
)comment &#39;\u5458\u5DE5\u8868&#39;;
-- \u6DFB\u52A0\u5916\u952E
alter table emp add constraint fk_emp_dept_id foreign key (dept_id) references dept(id);
INSERT INTO emp (id, name, age, job,salary, entrydate, managerid, dept_id) VALUES
         (1, &#39;\u91D1\u5EB8&#39;, 66, &#39;\u603B\u88C1&#39;,20000, &#39;2000-01-01&#39;, null,5),
         (2, &#39;\u5F20\u65E0\u5FCC&#39;, 20, &#39;\u9879\u76EE\u7ECF\u7406&#39;,12500, &#39;2005-12-05&#39;, 1,1),
         (3, &#39;\u6768\u900D&#39;, 33, &#39;\u5F00\u53D1&#39;, 8400,&#39;2000-11-03&#39;, 2,1),
         (4, &#39;\u97E6\u4E00\u7B11&#39;, 48, &#39;\u5F00\u53D1&#39;,11000, &#39;2002-02-05&#39;, 2,1),
         (5, &#39;\u5E38\u9047\u6625&#39;, 43, &#39;\u5F00\u53D1&#39;,10500, &#39;2004-09-07&#39;, 3,1),
         (6, &#39;\u5C0F\u662D&#39;, 19, &#39;\u7A0B\u5E8F\u5458\u9F13\u52B1\u5E08&#39;,6600, &#39;2004-10-12&#39;, 2,1),
         (7, &#39;\u706D\u7EDD&#39;, 60, &#39;\u8D22\u52A1\u603B\u76D1&#39;,8500, &#39;2002-09-12&#39;, 1,3),
         (8, &#39;\u5468\u82B7\u82E5&#39;, 19, &#39;\u4F1A\u8BA1&#39;,48000, &#39;2006-06-02&#39;, 7,3),
         (9, &#39;\u4E01\u654F\u541B&#39;, 23, &#39;\u51FA\u7EB3&#39;,5250, &#39;2009-05-13&#39;, 7,3),
         (10, &#39;\u8D75\u654F&#39;, 20, &#39;\u5E02\u573A\u90E8\u603B\u76D1&#39;,12500, &#39;2004-10-12&#39;, 1,2),
         (11, &#39;\u9E7F\u6756\u5BA2&#39;, 56, &#39;\u804C\u5458&#39;,3750, &#39;2006-10-03&#39;, 10,2),
         (12, &#39;\u9E64\u7B14\u7FC1&#39;, 19, &#39;\u804C\u5458&#39;,3750, &#39;2007-05-09&#39;, 10,2),
         (13, &#39;\u65B9\u4E1C\u767D&#39;, 19, &#39;\u804C\u5458&#39;,5500, &#39;2009-02-12&#39;, 10,2),
         (14, &#39;\u5F20\u4E09\u4E30&#39;, 88, &#39;\u9500\u552E\u603B\u76D1&#39;,14000, &#39;2004-10-12&#39;, 1,4),
         (15, &#39;\u4FDE\u83B2\u821F&#39;, 38, &#39;\u9500\u552E&#39;,4600, &#39;2004-10-12&#39;, 14,4),
         (16, &#39;\u5B8B\u8FDC\u6865&#39;, 40, &#39;\u9500\u552E&#39;,4600, &#39;2004-10-12&#39;, 14,4),
         (17, &#39;\u9648\u53CB\u8C05&#39;, 42, null,2000, &#39;2011-10-12&#39;, 1,null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dept\u8868\u51716\u6761\u8BB0\u5F55\uFF0Cemp\u8868\u517117\u6761\u8BB0\u5F55\u3002</p><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>\u591A\u8868\u67E5\u8BE2\u5C31\u662F\u6307\u4ECE\u591A\u5F20\u8868\u4E2D\u67E5\u8BE2\u6570\u636E\u3002</p><p>\u539F\u6765\u67E5\u8BE2\u5355\u8868\u6570\u636E\uFF0C\u6267\u884C\u7684SQL\u5F62\u5F0F\u4E3A\uFF1Aselect * from emp;</p><p>\u90A3\u4E48\u6211\u4EEC\u8981\u6267\u884C\u591A\u8868\u67E5\u8BE2\uFF0C\u5C31\u53EA\u9700\u8981\u4F7F\u7528\u9017\u53F7\u5206\u9694\u591A\u5F20\u8868\u5373\u53EF\uFF0C\u5982\uFF1A select * from emp , dept ;</p><p>\u5177\u4F53\u7684\u6267\u884C\u7ED3\u679C\u5982\u4E0B:</p><p><img src="`+p+'" alt="1653649467381" loading="lazy"></p><p>\u200B \u6B64\u65F6,\u6211\u4EEC\u770B\u5230\u67E5\u8BE2\u7ED3\u679C\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u7684\u7ED3\u679C\u96C6\uFF0C\u603B\u5171102\u6761\u8BB0\u5F55\uFF0C\u800C\u8FD9\u5176\u5B9E\u5C31\u662F\u5458\u5DE5\u8868emp\u6240\u6709\u7684\u8BB0\u5F55</p><p>(17) \u4E0E \u90E8\u95E8\u8868dept\u6240\u6709\u8BB0\u5F55(6) \u7684\u6240\u6709\u7EC4\u5408\u60C5\u51B5\uFF0C\u8FD9\u79CD\u73B0\u8C61\u79F0\u4E4B\u4E3A\u7B1B\u5361\u5C14\u79EF\u3002\u63A5\u4E0B\u6765\uFF0C\u5C31\u6765\u7B80\u5355</p><p>\u4ECB\u7ECD\u4E0B\u7B1B\u5361\u5C14\u79EF\u3002</p><p>\u7B1B\u5361\u5C14\u79EF: \u7B1B\u5361\u5C14\u4E58\u79EF\u662F\u6307\u5728\u6570\u5B66\u4E2D\uFF0C\u4E24\u4E2A\u96C6\u5408A\u96C6\u5408 \u548C B\u96C6\u5408\u7684\u6240\u6709\u7EC4\u5408\u60C5\u51B5</p><p><img src="'+o+'" alt="1653649486542" loading="lazy"></p><p>\u800C\u5728\u591A\u8868\u67E5\u8BE2\u4E2D\uFF0C\u6211\u4EEC\u662F\u9700\u8981\u6D88\u9664\u65E0\u6548\u7684\u7B1B\u5361\u5C14\u79EF\u7684\uFF0C\u53EA\u4FDD\u7559\u4E24\u5F20\u8868\u5173\u8054\u90E8\u5206\u7684\u6570\u636E.</p><p><img src="'+b+'" alt="1653649496264" loading="lazy"></p><p><img src="'+g+`" alt="1653649515883" loading="lazy"></p><p>\u5728SQL\u8BED\u53E5\u4E2D\uFF0C\u5982\u4F55\u6765\u53BB\u9664\u65E0\u6548\u7684\u7B1B\u5361\u5C14\u79EF\u5462\uFF1F \u6211\u4EEC\u53EF\u4EE5\u7ED9\u591A\u8868\u67E5\u8BE2\u52A0\u4E0A\u8FDE\u63A5\u67E5\u8BE2\u7684\u6761\u4EF6\u5373\u53EF\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from emp , dept where emp.dept_id = dept.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+'" alt="1653649547235" loading="lazy"></p><p>\u800C\u7531\u4E8Eid\u4E3A17\u7684\u5458\u5DE5\uFF0C\u6CA1\u6709dept_id\u5B57\u6BB5\u503C\uFF0C\u6240\u4EE5\u5728\u591A\u8868\u67E5\u8BE2\u65F6\uFF0C\u6839\u636E\u8FDE\u63A5\u67E5\u8BE2\u7684\u6761\u4EF6\u5E76\u6CA1\u6709\u67E5\u8BE2</p><p>\u5230\u3002</p><h3 id="\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a> \u5206\u7C7B</h3><ul><li><p>\u8FDE\u63A5\u67E5\u8BE2</p><ul><li>\u5185\u8FDE\u63A5\uFF1A\u76F8\u5F53\u4E8E\u67E5\u8BE2A\u3001B\u4EA4\u96C6\u90E8\u5206\u6570\u636E</li><li>\u5916\u8FDE\u63A5\uFF1A <ul><li>\u5DE6\u5916\u8FDE\u63A5\uFF1A\u67E5\u8BE2\u5DE6\u8868\u6240\u6709\u6570\u636E\uFF0C\u4EE5\u53CA\u4E24\u5F20\u8868\u4EA4\u96C6\u90E8\u5206\u6570\u636E</li><li>\u53F3\u5916\u8FDE\u63A5\uFF1A\u67E5\u8BE2\u53F3\u8868\u6240\u6709\u6570\u636E\uFF0C\u4EE5\u53CA\u4E24\u5F20\u8868\u4EA4\u96C6\u90E8\u5206\u6570\u636E</li><li>\u81EA\u8FDE\u63A5\uFF1A\u5F53\u524D\u8868\u4E0E\u81EA\u8EAB\u7684\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u81EA\u8FDE\u63A5\u5FC5\u987B\u4F7F\u7528\u8868\u522B\u540D</li></ul></li></ul></li><li><p>\u5B50\u67E5\u8BE2</p><p><img src="'+y+'" alt="1653649992219" loading="lazy"></p></li></ul><h2 id="\u5185\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5185\u8FDE\u63A5" aria-hidden="true">#</a> \u5185\u8FDE\u63A5</h2><p><img src="'+q+`" alt="1653650020240" loading="lazy"></p><blockquote><p>\u5185\u8FDE\u63A5\u7684\u8BED\u6CD5\u5206\u4E3A\u4E24\u79CD: \u9690\u5F0F\u5185\u8FDE\u63A5\u3001\u663E\u5F0F\u5185\u8FDE\u63A5\u3002\u5148\u6765\u5B66\u4E60\u4E00\u4E0B\u5177\u4F53\u7684\u8BED\u6CD5\u7ED3\u6784\u3002</p></blockquote><p>\u5185\u8FDE\u63A5\u67E5\u8BE2\u8BED\u6CD5\uFF1A</p><ul><li>\u9690\u5F0F\u5185\u8FDE\u63A5</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT \u5B57\u6BB5\u5217\u8868 FROM \u88681 , \u88682 WHERE \u6761\u4EF6 ... ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u663E\u793A\u5185\u8FDE\u63A5</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT \u5B57\u6BB5\u5217\u8868 FROM \u88681 [ INNER ] JOIN \u88682 ON \u8FDE\u63A5\u6761\u4EF6 ... ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6848\u4F8B\uFF1A</p><ol><li>\u67E5\u8BE2\u6BCF\u4E2A\u5458\u5DE5\u7684\u59D3\u540D\uFF0C\u4EE5\u53CA\u5173\u8054\u7684\u90E8\u95E8\u7684\u540D\u79F0\uFF08\u9690\u5F0F\u5185\u8FDE\u63A5\u5B9E\u73B0\uFF09</li></ol>`,55),I=e("li",null,[e("p",null,"\u8868\u7ED3\u6784\uFF1Aemp,dept")],-1),Q=i("\u8FDE\u63A5\u6761\u4EF6\uFF1Aemp.dept_id = "),N={href:"http://dept.id",target:"_blank",rel:"noopener noreferrer"},T=i("dept.id"),O=n(`<div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select emp.name &#39;\u59D3\u540D&#39;,dept.name &#39;\u90E8\u95E8&#39; from emp,dept where emp.dept_id = dept.id;
-- \u4E3A\u6BCF\u4E00\u5F20\u8868\u8D77\u522B\u540D,\u7B80\u5316SQL\u7F16\u5199
select e.name,d.name from emp e , dept d where e.dept_id = d.id; 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u67E5\u8BE2\u6BCF\u4E2A\u5458\u5DE5\u7684\u59D3\u540D\uFF0C\u4EE5\u53CA\u5173\u8054\u7684\u90E8\u95E8\u7684\u540D\u79F0\uFF08\u663E\u5F0F\u5185\u8FDE\u63A5\u5B9E\u73B0\uFF09 INNER JOIN ... ON ....</li></ol>`,2),k=e("li",null,[e("p",null,"\u8868\u7ED3\u6784\uFF1Aemp,dept")],-1),J=i("\u63A5\u6761\u4EF6\uFF1Aemp.dept_id = "),R={href:"http://dept.id",target:"_blank",rel:"noopener noreferrer"},D=i("dept.id"),j=n(`<div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT e.name &#39;\u59D3\u540D&#39;,d.name &#39;\u90E8\u95E8&#39; from emp e inner join dept d on e.dept_id = d.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5916\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FDE\u63A5" aria-hidden="true">#</a> \u5916\u8FDE\u63A5</h2><p><img src="`+_+`" alt="1653650763759" loading="lazy"></p><blockquote><p>\u5916\u8FDE\u63A5\u5206\u4E3A\u4E24\u79CD\uFF0C\u5206\u522B\u662F\uFF1A\u5DE6\u5916\u8FDE\u63A5 \u548C \u53F3\u5916\u8FDE\u63A5\u3002\u5177\u4F53\u7684\u8BED\u6CD5\u7ED3\u6784\u4E3A\uFF1A</p></blockquote><p>1). \u5DE6\u5916\u8FDE\u63A5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT \u5B57\u6BB5\u5217\u8868 FROM \u88681 LEFT [ OUTER ] JOIN \u88682 ON \u6761\u4EF6 ... ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5DE6\u5916\u8FDE\u63A5\u76F8\u5F53\u4E8E\u67E5\u8BE2\u88681(\u5DE6\u8868)\u7684\u6240\u6709\u6570\u636E\uFF0C\u5F53\u7136\u4E5F\u5305\u542B\u88681\u548C\u88682\u4EA4\u96C6\u90E8\u5206\u7684\u6570\u636E.</strong></p><p>2). \u53F3\u5916\u8FDE\u63A5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT \u5B57\u6BB5\u5217\u8868 FROM \u88681 RIGHT [ OUTER ] JOIN \u88682 ON \u6761\u4EF6 ... ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u53F3\u5916\u8FDE\u63A5\u76F8\u5F53\u4E8E\u67E5\u8BE2\u88682(\u53F3\u8868)\u7684\u6240\u6709\u6570\u636E\uFF0C\u5F53\u7136\u4E5F\u5305\u542B\u88681\u548C\u88682\u4EA4\u96C6\u90E8\u5206\u7684\u6570\u636E</strong>\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u5916\u8FDE\u63A5\u6F14\u793A

-- 1\uFF0C\u67E5\u8BE2emp\u8868\u7684\u6240\u6709\u6570\u636E, \u548C\u5BF9\u5E94\u7684\u90E8\u95E8\u4FE1\u606F
-- \u8868\u7ED3\u6784 emp dept
-- \u8FDE\u63A5\u6761\u4EF6 emp.dept_id = dept.id
select
    e.id,e.name,e.age,e.job,e.salary,e.entrydate,e.managerid,d.id,d.name
from
    emp e left join dept d on d.id = e.dept_id;

-- 2.\u67E5\u8BE2dept\u8868\u7684\u6240\u6709\u6570\u636E, \u548C\u5BF9\u5E94\u7684\u5458\u5DE5\u4FE1\u606F(\u53F3\u5916\u8FDE\u63A5)
select
    d.*,e.*
from
    dept d right join emp e on d.id = e.dept_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8FDE\u63A5" aria-hidden="true">#</a> \u81EA\u8FDE\u63A5</h2><h3 id="\u81EA\u8FDE\u63A5\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8FDE\u63A5\u67E5\u8BE2" aria-hidden="true">#</a> \u81EA\u8FDE\u63A5\u67E5\u8BE2</h3><p>\u81EA\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u81EA\u5DF1\u8FDE\u63A5\u81EA\u5DF1\uFF0C\u628A\u4E00\u5F20\u8868\u8FDE\u63A5\u67E5\u8BE2\u591A\u6B21\u3002</p><p>\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT \u5B57\u6BB5\u5217\u8868 FROM \u8868A \u522B\u540DA JOIN \u8868A \u522B\u540DB on \u6761\u4EF6.....;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u800C\u5BF9\u4E8E\u81EA\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u662F\u5185\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5916\u8FDE\u63A5\u67E5\u8BE2\u3002</p><p>\u6848\u4F8B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># ======================\u81EA\u8FDE\u63A5==========================

-- 1.\u67E5\u8BE2\u5458\u5DE5\u53CA\u5176\u6240\u5C5E\u9886\u5BFC\u7684\u540D\u5B57

select a.name \u5458\u5DE5,b.name \u9886\u5BFC from emp a,emp b where a.managerid = b.id;

-- 2.\u67E5\u8BE2\u6240\u6709\u5458\u5DE5 emp \u53CA\u5176\u9886\u5BFC\u7684\u540D\u5B57 emp \u5982\u679C\u5458\u5DE5\u6CA1\u6709\u9886\u5BFC\uFF0C\u4E5F\u9700\u8981\u67E5\u8BE2\u51FA\u6765

select  a.name \u5458\u5DE5,b.name \u9886\u5BFC  from emp a left join emp b on a.managerid = b.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u81EA\u8FDE\u63A5\u67E5\u8BE2\u4E2D\uFF0C\u5FC5\u987B\u8981\u4E3A\u8868\u8D77\u522B\u540D\uFF0C\u8981\u4E0D\u7136\u6211\u4EEC\u4E0D\u6E05\u695A\u6240\u6307\u5B9A\u7684\u6761\u4EF6\u3001\u8FD4\u56DE\u7684\u5B57\u6BB5\uFF0C\u5230\u5E95\u662F\u54EA\u4E00\u5F20\u8868\u7684\u5B57\u6BB5\u3002</p></div><h3 id="\u8054\u5408\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u67E5\u8BE2" aria-hidden="true">#</a> \u8054\u5408\u67E5\u8BE2</h3><p>\u5BF9\u4E8Eunion\u67E5\u8BE2\uFF0C\u5C31\u662F\u628A\u591A\u6B21\u67E5\u8BE2\u7684\u7ED3\u679C\u5408\u5E76\u8D77\u6765\uFF0C\u5F62\u6210\u4E00\u4E2A\u65B0\u7684\u67E5\u8BE2\u7ED3\u679C\u96C6\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select \u5B57\u6BB5\u5217\u8868 FROM \u8868A....
UNION [ ALL ]
SELECT \u5B57\u6BB5\u5217\u8868 FROM \u8868B.....;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u4E8E\u8054\u5408\u67E5\u8BE2\u7684\u591A\u5F20\u8868\u7684\u5217\u6570\u5FC5\u987B\u4FDD\u6301\u4E00\u81F4\uFF0C\u5B57\u6BB5\u7C7B\u578B\u4E5F\u9700\u8981\u4FDD\u6301\u4E00\u81F4</li><li><strong>union all \u4F1A\u5C06\u5168\u90E8\u7684\u6570\u636E\u76F4\u63A5\u5408\u5E76\u5728\u4E00\u8D77\uFF0Cunion\u4F1A\u5BF9\u5408\u5E76\u4E4B\u540E\u7684\u6570\u636E\u53BB\u91CD</strong></li></ul><p>\u6848\u4F8B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># ======================\u8054\u5408\u67E5\u8BE2==========================
-- 1.\u5C06\u85AA\u8D44\u4F4E\u4E8E 5000 \u7684\u5458\u5DE5 , \u548C \u5E74\u9F84\u5927\u4E8E 50 \u5C81\u7684\u5458\u5DE5\u5168\u90E8\u67E5\u8BE2\u51FA\u6765

select * from emp where salary &lt; 5000
union all
select * from emp where age &gt; 50;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt="image-20220619133053037" loading="lazy"></p><p><strong>union all\u67E5\u8BE2\u51FA\u6765\u7684\u7ED3\u679C\uFF0C\u4EC5\u4EC5\u8FDB\u884C\u7B80\u5355\u7684\u5408\u5E76\uFF0C\u5E76\u672A\u53BB\u91CD\u3002</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from emp where salary &lt; 5000
union
select * from emp where age &gt; 50;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+'" alt="image-20220619133148341" loading="lazy"></p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u591A\u6761\u67E5\u8BE2\u8BED\u53E5\u67E5\u8BE2\u51FA\u6765\u7684\u7ED3\u679C\uFF0C\u5B57\u6BB5\u6570\u91CF\u4E0D\u4E00\u81F4\uFF0C\u5728\u8FDB\u884Cunion/union all\u8054\u5408\u67E5\u8BE2\u65F6\uFF0C\u5C06\u4F1A\u62A5</p><p>\u9519\u3002\u5982\uFF1A</p><p><img src="'+L+`" alt="image-20220619133230311" loading="lazy"></p></div><h2 id="\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2</h2><h3 id="\u6982\u8FF0-1" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-1" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>1). \u6982\u5FF5</p><p>SQL\u8BED\u53E5\u4E2D\u5D4C\u5957SELECT\u8BED\u53E5\uFF0C\u79F0\u4E3A\u5D4C\u5957\u67E5\u8BE2\uFF0C\u53C8\u79F0\u5B50\u67E5\u8BE2\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT * FROM t1 WHERE column1 = ( SELECT column1 FROM t2 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B50\u67E5\u8BE2\u5916\u90E8\u7684\u8BED\u53E5\u53EF\u4EE5\u662FINSERT / UPDATE / DELETE / SELECT \u7684\u4EFB\u4F55\u4E00\u4E2A\u3002</p><p>2).\u5206\u7C7B</p><ul><li>\u6839\u636E\u5B50\u67E5\u8BE2\u7ED3\u679C\u4E0D\u540C\uFF0C\u5206\u4E3A\uFF1A <ul><li>\u6807\u91CF\u5B50\u67E5\u8BE2\uFF08\u5B50\u67E5\u8BE2\u7ED3\u679C\u4E3A\u5355\u4E2A\u503C\uFF09</li><li>\u5217\u5B50\u67E5\u8BE2\uFF08\u5B50\u67E5\u8BE2\u7ED3\u679C\u4E3A\u4E00\u5217\uFF09</li><li>\u884C\u5B50\u67E5\u8BE2\uFF08\u5B50\u67E5\u8BE2\u7ED3\u679C\u4E3A\u4E00\u884C\uFF09</li><li>\u8868\u5B50\u67E5\u8BE2\uFF08\u5B50\u67E5\u8BE2\u4E3A\u591A\u884C\u591A\u5217\uFF09</li></ul></li><li>\u6839\u636E\u5B50\u67E5\u8BE2\uFF0C\u5206\u4E3A\uFF1A <ul><li>WHERE\u4E4B\u540E</li><li>FROM\u4E4B\u540E</li><li>SELECT\u4E4B\u540E</li></ul></li></ul><h3 id="\u6807\u91CF\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6807\u91CF\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u6807\u91CF\u5B50\u67E5\u8BE2</h3><p>\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u5355\u4E2A\u503C\uFF08\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u65E5\u671F\u7B49\uFF09\uFF0C\u6700\u7B80\u5355\u7684\u5F62\u5F0F\uFF0C\u8FD9\u79CD\u5B50\u67E5\u8BE2\u79F0\u4E3A<mark>\u6807\u91CF\u5B50\u67E5\u8BE2</mark></p><p>\u5E38\u7528\u7684\u64CD\u4F5C\u7B26\uFF1A<code>= &lt;&gt; &gt; &gt;= &lt; &lt;= </code></p><p>\u6848\u4F8B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># ======================\u5B50\u67E5\u8BE2==========================
-- 1.\u67E5\u8BE2 &quot;\u9500\u552E\u90E8&quot; \u7684\u6240\u6709\u5458\u5DE5\u4FE1\u606F
-- a.\u67E5\u8BE2 &quot;\u9500\u552E\u90E8&quot; \u90E8\u95E8ID
select id from dept where name = &#39;\u9500\u552E\u90E8&#39;;
-- b.\u6839\u636E &quot;\u9500\u552E\u90E8&quot; \u90E8\u95E8ID, \u67E5\u8BE2\u5458\u5DE5\u4FE1\u606F
select * from emp where dept_id = (select id from dept where name = &#39;\u9500\u552E\u90E8&#39;);
-- 2.\u67E5\u8BE2\u5728 &quot;\u65B9\u4E1C\u767D&quot; \u5165\u804C\u4E4B\u540E\u7684\u5458\u5DE5\u4FE1\u606F
-- a.\u67E5\u8BE2 \u65B9\u4E1C\u767D \u7684\u5165\u804C\u65E5\u671F
select entrydate from emp where name = &#39;\u65B9\u4E1C\u767D&#39;;
-- b.\u67E5\u8BE2\u6307\u5B9A\u5165\u804C\u65E5\u671F\u4E4B\u540E\u5165\u804C\u7684\u5458\u5DE5\u4FE1\u606F
select * from emp where entrydate &gt; (select entrydate from emp where name = &#39;\u65B9\u4E1C\u767D&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5217\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5217\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5217\u5B50\u67E5\u8BE2</h3><p>\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E00\u5217\uFF08\u53EF\u4EE5\u662F\u591A\u884C\uFF09\uFF0C\u8FD9\u79CD\u5B50\u67E5\u8BE2\u79F0\u4E3A\u5217\u5B50\u67E5\u8BE2</p><p>\u5E38\u7528\u7684\u64CD\u4F5C\u7B26\uFF1AIN\u3001NOT IN \u3001ANY \u3001SOME \u3001 ALL</p><p><img src="`+x+`" alt="image-20220619134753580" loading="lazy"></p><p>\u6848\u4F8B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># ======================\u5217\u5B50\u67E5\u8BE2==========================
-- 1.\u67E5\u8BE2 &quot;\u9500\u552E\u90E8&quot; \u548C &quot;\u5E02\u573A\u90E8&quot; \u7684\u6240\u6709\u5458\u5DE5\u4FE1\u606F
-- a.\u67E5\u8BE2&quot;\u9500\u552E\u90E8&quot; \u548C &quot;\u5E02\u573A\u90E8&quot;\u7684ID
select id from dept where name = &#39;\u9500\u552E\u90E8&#39; or name = &#39;\u5E02\u573A\u90E8&#39;;
-- b.\u6839\u636E\u90E8\u95E8ID, \u67E5\u8BE2\u5458\u5DE5\u4FE1\u606F
select * from emp where dept_id in (select id from dept where name = &#39;\u9500\u552E\u90E8&#39; or name = &#39;\u5E02\u573A\u90E8&#39;);

-- 2.\u67E5\u8BE2\u6BD4 \u8D22\u52A1\u90E8 \u6240\u6709\u4EBA\u5DE5\u8D44\u90FD\u4F4E\u7684\u5458\u5DE5\u4FE1\u606F
-- a.\u67E5\u8BE2\u6240\u6709 \u8D22\u52A1\u90E8 \u4EBA\u5458\u5DE5\u8D44
select id from dept where name = &#39;\u8D22\u52A1\u90E8&#39;;

select salary from emp where dept_id = (select id from dept where name = &#39;\u8D22\u52A1\u90E8&#39;);
-- b. \u6BD4 \u8D22\u52A1\u90E8 \u6240\u6709\u4EBA\u5DE5\u8D44\u90FD\u9AD8\u7684\u5458\u5DE5\u4FE1\u606F
select * from emp where salary &gt; all ( select salary from emp where dept_id = (select id from dept where name = &#39;\u8D22\u52A1\u90E8&#39;) );

-- 3.\u67E5\u8BE2\u6BD4\u7814\u53D1\u90E8\u5176\u4E2D\u4EFB\u610F\u4E00\u4EBA\u5DE5\u8D44\u9AD8\u7684\u5458\u5DE5\u4FE1\u606F
-- a.\u67E5\u8BE2\u7814\u53D1\u90E8\u7684id
select id from dept where name = &#39;\u7814\u53D1\u90E8&#39;;
-- b.\u67E5\u8BE2\u7814\u53D1\u90E8\u6240\u6709\u4EBA\u5DE5\u8D44
select salary from emp where dept_id = (select id from dept where name = &#39;\u7814\u53D1\u90E8&#39;);
-- c.\u6BD4\u7814\u53D1\u90E8\u5176\u4E2D\u4EFB\u610F\u4E00\u4EBA\u5DE5\u8D44\u9AD8\u7684\u5458\u5DE5\u4FE1\u606F
select * from emp where salary &gt; any (select salary from emp where dept_id = (select id from dept where name = &#39;\u7814\u53D1\u90E8&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u884C\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u884C\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u884C\u5B50\u67E5\u8BE2</h3><p>\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E00\u884C\uFF08\u53EF\u4EE5\u662F\u591A\u5217\uFF09\uFF0C\u8FD9\u79CD\u5B50\u67E5\u8BE2\u79F0\u4E3A\u884C\u5B50\u67E5\u8BE2\u3002</p><p>\u5E38\u7528\u7684\u64CD\u4F5C\u7B26\uFF1A=\u3001&lt; &gt;\u3001IN\u3001NOT IN</p><p>\u6848\u4F8B:</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># ======================\u884C\u5B50\u67E5\u8BE2==========================
-- 1. \u67E5\u8BE2\u4E0E &quot;\u5F20\u65E0\u5FCC&quot; \u7684\u85AA\u8D44\u53CA\u76F4\u5C5E\u9886\u5BFC\u76F8\u540C\u7684\u5458\u5DE5\u4FE1\u606F ;
-- a.\u67E5\u8BE2 &quot;\u5F20\u65E0\u5FCC&quot; \u7684\u85AA\u8D44\u53CA\u76F4\u5C5E\u9886\u5BFC
select salary,managerid from emp where name = &#39;\u5F20\u65E0\u5FCC&#39;;
-- b.\u67E5\u8BE2\u4E0E &quot;\u5F20\u65E0\u5FCC&quot; \u7684\u85AA\u8D44\u53CA\u76F4\u5C5E\u9886\u5BFC\u76F8\u540C\u7684\u5458\u5DE5\u4FE1\u606F
select *from emp where (salary,managerid) = (select salary,managerid from emp where name = &#39;\u5F20\u65E0\u5FCC&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8868\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u8868\u5B50\u67E5\u8BE2</h3><p>\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u591A\u884C\u591A\u5217\uFF0C\u8FD9\u79CD\u5B50\u67E5\u8BE2\u79F0\u4E3A\u8868\u5B50\u67E5\u8BE2\u3002</p><p>\u5E38\u7528\u64CD\u4F5C\u7B26\uFF1AIN</p><p>\u6848\u4F8B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># ======================\u8868\u5B50\u67E5\u8BE2==========================
-- 1.\u67E5\u8BE2\u4E0E &quot;\u9E7F\u6756\u5BA2&quot; , &quot;\u5B8B\u8FDC\u6865&quot; \u7684\u804C\u4F4D\u548C\u85AA\u8D44\u76F8\u540C\u7684\u5458\u5DE5\u4FE1\u606F
-- a.\u67E5\u8BE2 &quot;\u9E7F\u6756\u5BA2&quot; , &quot;\u5B8B\u8FDC\u6865&quot; \u7684\u804C\u4F4D\u548C\u85AA\u8D44
select job,salary from emp where name in (&#39;\u9E7F\u6756\u5BA2&#39;,&#39;\u5B8B\u8FDC\u6865&#39;);

-- b.\u67E5\u8BE2\u4E0E &quot;\u9E7F\u6756\u5BA2&quot; , &quot;\u5B8B\u8FDC\u6865&quot; \u7684\u804C\u4F4D\u548C\u85AA\u8D44\u76F8\u540C\u7684\u5458\u5DE5\u4FE1\u606F
select * from emp where (job , salary) in (select job,salary from emp where name in (&#39;\u9E7F\u6756\u5BA2&#39;,&#39;\u5B8B\u8FDC\u6865&#39;));

-- 2.\u67E5\u8BE2\u5165\u804C\u65E5\u671F\u662F &quot;2006-01-01&quot; \u4E4B\u540E\u7684\u5458\u5DE5\u4FE1\u606F , \u53CA\u5176\u90E8\u95E8\u4FE1\u606F
-- a.\u5165\u804C\u65E5\u671F\u662F &quot;2006-01-01&quot; \u4E4B\u540E\u7684\u5458\u5DE5\u4FE1\u606F
select * from emp where entrydate &gt; &#39;2006-01-01&#39;;
-- b.\u67E5\u8BE2\u8FD9\u90E8\u5206\u5458\u5DE5, \u5BF9\u5E94\u7684\u90E8\u95E8\u4FE1\u606F;
select e.*,d.* from (select * from emp where entrydate &gt; &#39;2006-01-01&#39;) e left join dept d on e.dept_id = d.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u8868\u67E5\u8BE2\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u591A\u8868\u67E5\u8BE2\u6848\u4F8B" aria-hidden="true">#</a> \u591A\u8868\u67E5\u8BE2\u6848\u4F8B</h3><p>\u6570\u636E\u73AF\u5883\u51C6\u5907\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u521B\u5EFAdept\u8868\uFF0C\u5E76\u63D2\u5165\u6570\u636E
create table dept(
    id int auto_increment comment &#39;ID&#39; primary key,
    name varchar(50) not null comment &#39;\u90E8\u95E8\u540D\u79F0&#39;
)comment &#39;\u90E8\u95E8\u8868&#39;;
-- \u521B\u5EFAemp\u8868\uFF0C\u5E76\u63D2\u5165\u6570\u636E
INSERT INTO dept (id, name) VALUES
         (1, &#39;\u7814\u53D1\u90E8&#39;),
         (2, &#39;\u5E02\u573A\u90E8&#39;),
         (3, &#39;\u8D22\u52A1\u90E8&#39;),
         (4, &#39;\u9500\u552E\u90E8&#39;),
         (5, &#39;\u603B\u7ECF\u529E&#39;), (6, &#39;\u4EBA\u4E8B\u90E8&#39;);
create table emp(
    id int auto_increment comment &#39;ID&#39; primary key,
    name varchar(50) not null comment &#39;\u59D3\u540D&#39;,
    age int comment &#39;\u5E74\u9F84&#39;, job varchar(20) comment &#39;\u804C\u4F4D&#39;,
    salary int comment &#39;\u85AA\u8D44&#39;,
    entrydate date comment &#39;\u5165\u804C\u65F6\u95F4&#39;,
    managerid int comment &#39;\u76F4\u5C5E\u9886\u5BFCID&#39;,
    dept_id int comment &#39;\u90E8\u95E8ID&#39;
)comment &#39;\u5458\u5DE5\u8868&#39;;
-- \u6DFB\u52A0\u5916\u952E
alter table emp add constraint fk_emp_dept_id foreign key (dept_id) references dept(id);
INSERT INTO emp (id, name, age, job,salary, entrydate, managerid, dept_id) VALUES
         (1, &#39;\u91D1\u5EB8&#39;, 66, &#39;\u603B\u88C1&#39;,20000, &#39;2000-01-01&#39;, null,5),
         (2, &#39;\u5F20\u65E0\u5FCC&#39;, 20, &#39;\u9879\u76EE\u7ECF\u7406&#39;,12500, &#39;2005-12-05&#39;, 1,1),
         (3, &#39;\u6768\u900D&#39;, 33, &#39;\u5F00\u53D1&#39;, 8400,&#39;2000-11-03&#39;, 2,1),
         (4, &#39;\u97E6\u4E00\u7B11&#39;, 48, &#39;\u5F00\u53D1&#39;,11000, &#39;2002-02-05&#39;, 2,1),
         (5, &#39;\u5E38\u9047\u6625&#39;, 43, &#39;\u5F00\u53D1&#39;,10500, &#39;2004-09-07&#39;, 3,1),
         (6, &#39;\u5C0F\u662D&#39;, 19, &#39;\u7A0B\u5E8F\u5458\u9F13\u52B1\u5E08&#39;,6600, &#39;2004-10-12&#39;, 2,1),
         (7, &#39;\u706D\u7EDD&#39;, 60, &#39;\u8D22\u52A1\u603B\u76D1&#39;,8500, &#39;2002-09-12&#39;, 1,3),
         (8, &#39;\u5468\u82B7\u82E5&#39;, 19, &#39;\u4F1A\u8BA1&#39;,48000, &#39;2006-06-02&#39;, 7,3),
         (9, &#39;\u4E01\u654F\u541B&#39;, 23, &#39;\u51FA\u7EB3&#39;,5250, &#39;2009-05-13&#39;, 7,3),
         (10, &#39;\u8D75\u654F&#39;, 20, &#39;\u5E02\u573A\u90E8\u603B\u76D1&#39;,12500, &#39;2004-10-12&#39;, 1,2),
         (11, &#39;\u9E7F\u6756\u5BA2&#39;, 56, &#39;\u804C\u5458&#39;,3750, &#39;2006-10-03&#39;, 10,2),
         (12, &#39;\u9E64\u7B14\u7FC1&#39;, 19, &#39;\u804C\u5458&#39;,3750, &#39;2007-05-09&#39;, 10,2),
         (13, &#39;\u65B9\u4E1C\u767D&#39;, 19, &#39;\u804C\u5458&#39;,5500, &#39;2009-02-12&#39;, 10,2),
         (14, &#39;\u5F20\u4E09\u4E30&#39;, 88, &#39;\u9500\u552E\u603B\u76D1&#39;,14000, &#39;2004-10-12&#39;, 1,4),
         (15, &#39;\u4FDE\u83B2\u821F&#39;, 38, &#39;\u9500\u552E&#39;,4600, &#39;2004-10-12&#39;, 14,4),
         (16, &#39;\u5B8B\u8FDC\u6865&#39;, 40, &#39;\u9500\u552E&#39;,4600, &#39;2004-10-12&#39;, 14,4),
         (17, &#39;\u9648\u53CB\u8C05&#39;, 42, null,2000, &#39;2011-10-12&#39;, 1,null);
create table salgrade( 
    grade int, 
    losal int,
    hisal int ) 
comment &#39;\u85AA\u8D44\u7B49\u7EA7\u8868&#39;; 
insert into salgrade values (1,0,3000); 
insert into salgrade values (2,3001,5000);
insert into salgrade values (3,5001,8000);
insert into salgrade values (4,8001,10000); 
insert into salgrade values (5,10001,15000);
insert into salgrade values (6,15001,20000);
insert into salgrade values (7,20001,25000); 
insert into salgrade values (8,25001,30000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u6848\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4E3B\u8981\u8FD0\u7528\u4E0A\u9762\u6240\u8BB2\u89E3\u7684<strong>\u591A\u8868\u67E5\u8BE2\u7684\u8BED\u6CD5</strong>\uFF0C\u5B8C\u6210\u4EE5\u4E0B\u768412\u4E2A\u9700\u6C42\u5373\u53EF\uFF0C\u800C\u8FD9\u91CC\u4E3B\u8981\u6D89</p><p>\u53CA\u5230\u7684\u8868\u5C31\u4E09\u5F20\uFF1A<strong>emp\u5458\u5DE5\u8868\u3001dept\u90E8\u95E8\u8868\u3001salgrade\u85AA\u8D44\u7B49\u7EA7\u8868</strong> \u3002</p><p>1). \u67E5\u8BE2\u5458\u5DE5\u7684\u59D3\u540D\u3001\u5E74\u9F84\u3001\u804C\u4F4D\u3001\u90E8\u95E8\u4FE1\u606F \uFF08\u9690\u5F0F\u5185\u8FDE\u63A5\uFF09</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868\uFF1Aemp\u3001dept
-- \u8FDE\u63A5\u6761\u4EF6: emp.dept_id = dept.id
select e.name,e.age,e.job,d.name from emp e ,dept d where e.dept_id = d.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2). \u67E5\u8BE2\u5E74\u9F84\u5C0F\u4E8E30\u5C81\u7684\u5458\u5DE5\u7684\u59D3\u540D\u3001\u5E74\u9F84\u3001\u804C\u4F4D\u3001\u90E8\u95E8\u4FE1\u606F\uFF08\u663E\u5F0F\u5185\u8FDE\u63A5\uFF09</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868\uFF1Aemp\u3001dept
-- \u8FDE\u63A5\u6761\u4EF6: emp.dept_id = dept.id
select e.name,e.age,e.job,d.name from emp e inner join dept d on e.dept_id = d.id where e.age&lt;30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3). \u67E5\u8BE2\u62E5\u6709\u5458\u5DE5\u7684\u90E8\u95E8ID\u3001\u90E8\u95E8\u540D\u79F0</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868\uFF1Aemp\u3001dept
-- \u8FDE\u63A5\u6761\u4EF6: emp.dept_id = dept.id
select distinct d.id,d.name from emp e, dept d where e.dept_id = d.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4). \u67E5\u8BE2\u6240\u6709\u5E74\u9F84\u5927\u4E8E40\u5C81\u7684\u5458\u5DE5, \u53CA\u5176\u5F52\u5C5E\u7684\u90E8\u95E8\u540D\u79F0; \u5982\u679C\u5458\u5DE5\u6CA1\u6709\u5206\u914D\u90E8\u95E8, \u4E5F\u9700\u8981\u5C55\u793A\u51FA\u6765(\u5916\u8FDE\u63A5)</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868\uFF1Aemp\u3001dept
-- \u8FDE\u63A5\u6761\u4EF6: emp.dept_id = dept.id
select e.*,d.name from emp e left join dept d on d.id = e.dept_id where e.age &gt;40;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5). \u67E5\u8BE2\u6240\u6709\u5458\u5DE5\u7684\u5DE5\u8D44\u7B49\u7EA7</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868: emp , salgrade
-- \u8FDE\u63A5\u6761\u4EF6 : emp.salary &gt;= salgrade.losal and emp.salary &lt;= salgrade.hisal
-- \u65B9\u5F0F\u4E00
select e.name &#39;\u59D3\u540D&#39; ,s.grade &#39;\u5DE5\u8D44\u7B49\u7EA7&#39; from emp e,salgrade s where e.salary &gt;= s.losal and e.salary &lt;= s.hisal;
-- \u65B9\u5F0F\u4E8C
select e.name &#39;\u59D3\u540D&#39; ,s.grade &#39;\u5DE5\u8D44\u7B49\u7EA7&#39; from emp e,salgrade s where e.salary between s.losal and s.hisal;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6). \u67E5\u8BE2 &quot;\u7814\u53D1\u90E8&quot; \u6240\u6709\u5458\u5DE5\u7684\u4FE1\u606F\u53CA \u5DE5\u8D44\u7B49\u7EA7</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868: emp , salgrade , dept
-- \u8FDE\u63A5\u6761\u4EF6 : emp.salary between salgrade.losal and salgrade.hisal ,
-- emp.dept_id = dept.id
-- \u67E5\u8BE2\u6761\u4EF6 : dept.name = &#39;\u7814\u53D1\u90E8&#39;
select e.name &#39;\u59D3\u540D&#39; ,s.grade &#39;\u5DE5\u8D44\u7B49\u7EA7&#39; from emp e,salgrade s where e.salary  between s.losal and s.hisal and e.dept_id = (select id from dept where name = &#39;\u7814\u53D1\u90E8&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7). \u67E5\u8BE2 &quot;\u7814\u53D1\u90E8&quot; \u5458\u5DE5\u7684\u5E73\u5747\u5DE5\u8D44</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># 7). \u67E5\u8BE2 &quot;\u7814\u53D1\u90E8&quot; \u5458\u5DE5\u7684\u5E73\u5747\u5DE5\u8D44
-- \u8868: emp , dept
-- \u8FDE\u63A5\u6761\u4EF6 : emp.dept_id = dept.id
select avg(salary) &#39;\u5E73\u5747\u5DE5\u8D44&#39; from emp where dept_id = (select id from dept where name = &#39;\u7814\u53D1\u90E8&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8). \u67E5\u8BE2\u5DE5\u8D44\u6BD4 &quot;\u706D\u7EDD&quot; \u9AD8\u7684\u5458\u5DE5\u4FE1\u606F\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u2460. \u67E5\u8BE2 &quot;\u706D\u7EDD&quot; \u7684\u85AA\u8D44
select salary from emp where name = &#39;\u706D\u7EDD&#39;;
-- \u2461. \u67E5\u8BE2\u6BD4\u5979\u5DE5\u8D44\u9AD8\u7684\u5458\u5DE5\u6570\u636E
select * from emp where salary &gt; (select salary from emp where name = &#39;\u706D\u7EDD&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9). \u67E5\u8BE2\u6BD4\u5E73\u5747\u85AA\u8D44\u9AD8\u7684\u5458\u5DE5\u4FE1\u606F</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u2460. \u67E5\u8BE2\u5458\u5DE5\u7684\u5E73\u5747\u85AA\u8D44
select avg(salary) from emp;
-- \u2461. \u67E5\u8BE2\u6BD4\u5E73\u5747\u85AA\u8D44\u9AD8\u7684\u5458\u5DE5\u4FE1\u606F
select * from emp where salary &gt; (select avg(salary) from emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10). \u67E5\u8BE2\u4F4E\u4E8E\u672C\u90E8\u95E8\u5E73\u5747\u5DE5\u8D44\u7684\u5458\u5DE5\u4FE1\u606F</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- a.\u67E5\u8BE2\u5236\u5B9A\u90E8\u95E8\u5E73\u5747\u85AA\u8D44
select avg(salary) from emp e where e.dept_id = 1;
select avg(salary) from emp e where e.dept_id = 2;
-- b.\u67E5\u8BE2\u4F4E\u4E8E\u672C\u90E8\u95E8\u5E73\u5747\u5DE5\u8D44\u7684\u5458\u5DE5\u4FE1\u606F
select e2.*,(select avg(salary) from emp e1 where e1.dept_id = e2.dept_id) &#39;\u5E73\u5747\u85AA\u8D44&#39; from emp e2 where salary &lt; (select avg(salary) from emp e1 where e1.dept_id = e2.dept_id )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11). \u67E5\u8BE2\u6240\u6709\u7684\u90E8\u95E8\u4FE1\u606F, \u5E76\u7EDF\u8BA1\u90E8\u95E8\u7684\u5458\u5DE5\u4EBA\u6570</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select d.id,d.name ,(select count(*) from emp e where e.dept_id = d.id) &#39;\u4EBA\u6570&#39; from dept d;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>12). \u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684\u9009\u8BFE\u60C5\u51B5, \u5C55\u793A\u51FA\u5B66\u751F\u540D\u79F0, \u5B66\u53F7, \u8BFE\u7A0B\u540D\u79F0</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u8868: student , course , student_course
-- \u8FDE\u63A5\u6761\u4EF6: student.id = student_course.studentid , course.id = student_course.courseid
select s.name &#39;\u5B66\u751F\u540D\u79F0&#39;,s.no &#39;\u5B66\u53F7&#39;,c.name &#39;\u8BFE\u7A0B\u540D\u79F0&#39; from student s,student_course sc,course c where s.id = sc.studentid and c.id = sc.courseid;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><p><img src="`+w+'" alt="image-20220619161901014" loading="lazy"></p>',91);function z(A,C){const l=a("ExternalLinkIcon");return r(),m("div",null,[M,e("ul",null,[I,e("li",null,[e("p",null,[Q,e("a",N,[T,d(l)])])])]),O,e("ul",null,[k,e("li",null,[e("p",null,[J,e("a",R,[D,d(l)])])])]),j])}var V=s(E,[["render",z],["__file","\u591A\u8868\u67E5\u8BE2.html.vue"]]);export{V as default};
