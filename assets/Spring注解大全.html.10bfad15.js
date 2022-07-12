const e=JSON.parse('{"key":"v-80455d4c","path":"/posts/Java%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BC%80%E5%8F%91/Spring/Spring%E6%B3%A8%E8%A7%A3%E5%A4%A7%E5%85%A8.html","title":"Spring\u6CE8\u89E3\u5927\u5168","lang":"zh-CN","frontmatter":{"author":"Mr.Yang","date":"2022-04-18T00:00:00.000Z","category":["Spring\u6CE8\u89E3\u5927\u5168"],"tag":["Spring\u6CE8\u89E3\u5927\u5168"],"star":true,"sticky":1,"summary":"Spring\u6CE8\u89E3\u5927\u5168 \u5B98\u65B9\u6587\u6863\u67E5\u6CE8\u89E3 [https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/package-summary.html ](https://docs.spring.io/spring-fra","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/JavaStudy/posts/Java%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BC%80%E5%8F%91/Spring/Spring%E6%B3%A8%E8%A7%A3%E5%A4%A7%E5%85%A8.html"}],["meta",{"property":"og:title","content":"Spring\u6CE8\u89E3\u5927\u5168"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Yang"}],["meta",{"property":"article:tag","content":"Spring\u6CE8\u89E3\u5927\u5168"}],["meta",{"property":"article:published_time","content":"2022-04-18T00:00:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001Spring bean\u6CE8\u89E3","slug":"\u4E00\u3001spring-bean\u6CE8\u89E3","children":[{"level":3,"title":"1\u3001@SpringBootApplication","slug":"_1\u3001-springbootapplication","children":[]},{"level":3,"title":"2\u3001@Component","slug":"_2\u3001-component","children":[]},{"level":3,"title":"3\u3001@ComponentScan","slug":"_3\u3001-componentscan","children":[]},{"level":3,"title":"4\u3001@Service","slug":"_4\u3001-service","children":[]},{"level":3,"title":"5\u3001@EnableAutoConfiguration","slug":"_5\u3001-enableautoconfiguration","children":[]},{"level":3,"title":"6\u3001@Resource\u3001@Autowired\u548C@Inject","slug":"_6\u3001-resource\u3001-autowired\u548C-inject","children":[]},{"level":3,"title":"7\u3001@Repository","slug":"_7\u3001-repository","children":[]},{"level":3,"title":"8\u3001@Bean","slug":"_8\u3001-bean","children":[]},{"level":3,"title":"9\u3001@Scope","slug":"_9\u3001-scope","children":[]},{"level":3,"title":"10\u3001@Value","slug":"_10\u3001-value","children":[]},{"level":3,"title":"11\u3001@Conditional","slug":"_11\u3001-conditional","children":[]},{"level":3,"title":"12\u3001@PostConstruct & @PreDestroy","slug":"_12\u3001-postconstruct-predestroy","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u5207\u9762\uFF08AOP\uFF09\u76F8\u5173\u6CE8\u89E3","slug":"\u4E8C\u3001\u5207\u9762-aop-\u76F8\u5173\u6CE8\u89E3","children":[{"level":3,"title":"1\u3001@EnableAspectJAutoProxy","slug":"_1\u3001-enableaspectjautoproxy","children":[]},{"level":3,"title":"2\u3001@Aspect","slug":"_2\u3001-aspect","children":[]},{"level":3,"title":"3\u3001@PointCut","slug":"_3\u3001-pointcut","children":[]}]},{"level":2,"title":"\u4E09\u3001\u5168\u5C40\u5F02\u5E38\u5904\u7406","slug":"\u4E09\u3001\u5168\u5C40\u5F02\u5E38\u5904\u7406","children":[{"level":3,"title":"1\u3001@ControllerAdvice","slug":"_1\u3001-controlleradvice","children":[]},{"level":3,"title":"2\u3001@ExceptionHandler\uFF08Exception.class\uFF09","slug":"_2\u3001-exceptionhandler-exception-class","children":[]}]},{"level":2,"title":"\u56DB\u3001JPA\u6CE8\u89E3","slug":"\u56DB\u3001jpa\u6CE8\u89E3","children":[{"level":3,"title":"1\u3001@Entity","slug":"_1\u3001-entity","children":[]},{"level":3,"title":"2\u3001@Table(name=\u201D\u201C)","slug":"_2\u3001-table-name","children":[]},{"level":3,"title":"3\u3001@MappedSuperClass","slug":"_3\u3001-mappedsuperclass","children":[]},{"level":3,"title":"4\u3001@NoRepositoryBean","slug":"_4\u3001-norepositorybean","children":[]},{"level":3,"title":"5\u3001@Column","slug":"_5\u3001-column","children":[]},{"level":3,"title":"6\u3001@Id","slug":"_6\u3001-id","children":[]},{"level":3,"title":"7\u3001@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = \u201Crepair_seq\u201D)","slug":"_7\u3001-generatedvalue-strategy-generationtype-sequence-generator-repair-seq","children":[]},{"level":3,"title":"8\u3001@SequenceGeneretor(name = \u201Crepair_seq\u201D, sequenceName = \u201Cseq_repair\u201D, allocationSize = 1)","slug":"_8\u3001-sequencegeneretor-name-repair-seq-sequencename-seq-repair-allocationsize-1","children":[]},{"level":3,"title":"9\u3001@Transient","slug":"_9\u3001-transient","children":[]},{"level":3,"title":"10\u3001@JsonIgnore @JsonIgnoreProperties@JsonFormat","slug":"_10\u3001-jsonignore-jsonignoreproperties-jsonformat","children":[]},{"level":3,"title":"11\u3001@JoinColumn\uFF08name=\u201DloginId\u201D\uFF09","slug":"_11\u3001-joincolumn-name-loginid","children":[]},{"level":3,"title":"12\u3001@OneToOne\u3001@OneToMany\u3001@ManyToOne","slug":"_12\u3001-onetoone\u3001-onetomany\u3001-manytoone","children":[]},{"level":3,"title":"13\u3001@Lob","slug":"_13\u3001-lob","children":[]},{"level":3,"title":"14\u3001@Enumerated","slug":"_14\u3001-enumerated","children":[]},{"level":3,"title":"15\u3001@Modifying","slug":"_15\u3001-modifying","children":[]},{"level":3,"title":"16\u3001@EnableJpaAuditing","slug":"_16\u3001-enablejpaauditing","children":[]}]},{"level":2,"title":"\u4E94\u3001\u4E8B\u52A1","slug":"\u4E94\u3001\u4E8B\u52A1","children":[{"level":3,"title":"1\u3001@Transactional","slug":"_1\u3001-transactional","children":[]}]},{"level":2,"title":"\u516D\u3001Lombok","slug":"\u516D\u3001lombok","children":[{"level":3,"title":"1\u3001@Slf4j","slug":"_1\u3001-slf4j","children":[]},{"level":3,"title":"2\u3001@Setter","slug":"_2\u3001-setter","children":[]},{"level":3,"title":"3\u3001@Getter","slug":"_3\u3001-getter","children":[]},{"level":3,"title":"4\u3001@Data","slug":"_4\u3001-data","children":[]},{"level":3,"title":"5\u3001@Log4j2","slug":"_5\u3001-log4j2","children":[]},{"level":3,"title":"6\u3001@EqualsAndHashCode","slug":"_6\u3001-equalsandhashcode","children":[]},{"level":3,"title":"7\u3001@ToString","slug":"_7\u3001-tostring","children":[]},{"level":3,"title":"8\u3001@NoArgsConstructor, @RequiredArgsConstructor and @AllArgsConstructor","slug":"_8\u3001-noargsconstructor-requiredargsconstructor-and-allargsconstructor","children":[]},{"level":3,"title":"9\u3001@NonNull","slug":"_9\u3001-nonnull","children":[]},{"level":3,"title":"10\u3001@Nullable","slug":"_10\u3001-nullable","children":[]},{"level":3,"title":"11\u3001@Value","slug":"_11\u3001-value","children":[]},{"level":3,"title":"12\u3001@Builder","slug":"_12\u3001-builder","children":[]}]},{"level":2,"title":"\u4E03\u3001\u53C2\u6570\u68C0\u9A8C","slug":"\u4E03\u3001\u53C2\u6570\u68C0\u9A8C","children":[{"level":3,"title":"1\u3001 \u4E00\u4E9B\u5E38\u7528\u7684\u5B57\u6BB5\u9A8C\u8BC1\u7684\u6CE8\u89E3","slug":"_1\u3001-\u4E00\u4E9B\u5E38\u7528\u7684\u5B57\u6BB5\u9A8C\u8BC1\u7684\u6CE8\u89E3","children":[]},{"level":3,"title":"2\u3001 \u9A8C\u8BC1\u8BF7\u6C42\u4F53(RequestBody)","slug":"_2\u3001-\u9A8C\u8BC1\u8BF7\u6C42\u4F53-requestbody","children":[]},{"level":3,"title":"3\u3001 \u9A8C\u8BC1\u8BF7\u6C42\u53C2\u6570(Path Variables \u548C Request Parameters)","slug":"_3\u3001-\u9A8C\u8BC1\u8BF7\u6C42\u53C2\u6570-path-variables-\u548C-request-parameters","children":[]}]},{"level":2,"title":"\u516B\u3001 springMVC\u76F8\u5173\u6CE8\u89E3","slug":"\u516B\u3001-springmvc\u76F8\u5173\u6CE8\u89E3","children":[{"level":3,"title":"1\u3001@RestController","slug":"_1\u3001-restcontroller","children":[]},{"level":3,"title":"2\u3001@Controller","slug":"_2\u3001-controller","children":[]},{"level":3,"title":"3\u3001@RequestMapping","slug":"_3\u3001-requestmapping","children":[]},{"level":3,"title":"4\u3001@ModelAttribute\u548C @SessionAttributes","slug":"_4\u3001-modelattribute\u548C-sessionattributes","children":[]},{"level":3,"title":"5\u3001@PathVariable","slug":"_5\u3001-pathvariable","children":[]},{"level":3,"title":"6\u3001@RequestParam","slug":"_6\u3001-requestparam","children":[]},{"level":3,"title":"7\u3001@ResponseBody","slug":"_7\u3001-responsebody","children":[]},{"level":3,"title":"8\u3001@CrossOrigin","slug":"_8\u3001-crossorigin","children":[]},{"level":3,"title":"9\u3001@InitBinder","slug":"_9\u3001-initbinder","children":[]}]},{"level":2,"title":"\u4E5D\u3001\u5C5E\u6027\u914D\u7F6E\u76F8\u5173","slug":"\u4E5D\u3001\u5C5E\u6027\u914D\u7F6E\u76F8\u5173","children":[{"level":3,"title":"1\u3001@Configuration","slug":"_1\u3001-configuration","children":[]},{"level":3,"title":"2\u3001@ConfigurationProperties","slug":"_2\u3001-configurationproperties","children":[]},{"level":3,"title":"3\u3001@Import","slug":"_3\u3001-import","children":[]},{"level":3,"title":"4\u3001@ImportResource","slug":"_4\u3001-importresource","children":[]}]},{"level":2,"title":"\u5341\u3001SpringCloud","slug":"\u5341\u3001springcloud","children":[{"level":3,"title":"1\u3001@EnableEurekaServer","slug":"_1\u3001-enableeurekaserver","children":[]},{"level":3,"title":"2\u3001@EnableDiscoveryClient","slug":"_2\u3001-enablediscoveryclient","children":[]},{"level":3,"title":"3\u3001@LoadBalanced","slug":"_3\u3001-loadbalanced","children":[]},{"level":3,"title":"4\u3001@EnableCircuitBreaker","slug":"_4\u3001-enablecircuitbreaker","children":[]},{"level":3,"title":"5\u3001@HystrixCommand(fallbackMethod=\u201DbackMethod\u201D)","slug":"_5\u3001-hystrixcommand-fallbackmethod-backmethod","children":[]},{"level":3,"title":"6\u3001@EnableConfigServer","slug":"_6\u3001-enableconfigserver","children":[]},{"level":3,"title":"7\u3001@EnableZuulProxy","slug":"_7\u3001-enablezuulproxy","children":[]},{"level":3,"title":"8\u3001@SpringCloudApplication:","slug":"_8\u3001-springcloudapplication","children":[]}]},{"level":2,"title":"\u5341\u4E00\u3001\u6D4B\u8BD5\u76F8\u5173","slug":"\u5341\u4E00\u3001\u6D4B\u8BD5\u76F8\u5173","children":[{"level":3,"title":"1\u3001@ActiveProfiles","slug":"_1\u3001-activeprofiles","children":[]},{"level":3,"title":"2\u3001@Test","slug":"_2\u3001-test","children":[]},{"level":3,"title":"3\u3001@WithMockUser","slug":"_3\u3001-withmockuser","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":31.79,"words":9536},"filePathRelative":"posts/Java\u4F01\u4E1A\u7EA7\u5F00\u53D1/Spring/Spring\u6CE8\u89E3\u5927\u5168.md","localizedDate":"2022\u5E744\u670818\u65E5"}');export{e as data};
