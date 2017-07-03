package ro.platformsc;

import io.github.jhipster.config.JHipsterConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.MetricFilterAutoConfiguration;
import org.springframework.boot.actuate.autoconfigure.MetricRepositoryAutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.core.env.Environment;
import org.springframework.web.WebApplicationInitializer;
import ro.teamnet.bootstrap.config.DatabaseConfiguration;
import ro.teamnet.bootstrap.config.DefaultProfileUtil;

import javax.annotation.PostConstruct;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.Collection;

/**
 * This is a helper Java class that provides an alternative to creating a web.xml.
 * A main method is also provided and may be used for running the application.
 */
@ComponentScan(
        basePackages = {"ro.teamnet.bootstrap", "ro.platformsc"},
        excludeFilters = @ComponentScan.Filter(
                type = FilterType.ASSIGNABLE_TYPE,
                value = {/* Components you wish to exclude */}
        )
)
@EnableAutoConfiguration(
        exclude = {
                MetricFilterAutoConfiguration.class,
                MetricRepositoryAutoConfiguration.class,
                DatabaseConfiguration.class
        }
)
@EnableConfigurationProperties(LiquibaseProperties.class)
public class  PlatformscApplication extends SpringBootServletInitializer implements WebApplicationInitializer {

    private static final Logger log = LoggerFactory.getLogger(PlatformscApplication.class);

        private final Environment env;

        public PlatformscApplication(Environment env) {
            this.env = env;
        }



        /**
         * Initializes platformsc.
         * <p>
         * Spring profiles can be configured with a program arguments --spring.profiles.active=your-active-profile
         * <p>
         * You can find more information on how profiles work with JHipster on <a href="http://jhipster.github.io/profiles/">http://jhipster.github.io/profiles/</a>.
         */
        @PostConstruct
        public void initApplication() {
            log.info("Running with Spring profile(s) : {}", Arrays.toString(env.getActiveProfiles()));
            Collection<String> activeProfiles = Arrays.asList(env.getActiveProfiles());
            if (activeProfiles.contains(JHipsterConstants.SPRING_PROFILE_DEVELOPMENT) && activeProfiles.contains(JHipsterConstants.SPRING_PROFILE_PRODUCTION)) {
                log.error("You have misconfigured your application! It should not run " +
                        "with both the 'dev' and 'prod' profiles at the same time. from test");
            }
            if (activeProfiles.contains(JHipsterConstants.SPRING_PROFILE_DEVELOPMENT) && activeProfiles.contains(JHipsterConstants.SPRING_PROFILE_CLOUD)) {
                log.error("You have misconfigured your application! It should not" +
                        "run with both the 'dev' and 'cloud' profiles at the same time.");
            }
        }

        /**
         * Main method, used to run the application.
         *
         * @param args the command line arguments
         * @throws UnknownHostException if the local host name could not be resolved into an address
         */
        public static void main(String[] args) throws UnknownHostException {
            SpringApplication app = new SpringApplication(PlatformscApplication.class);

            DefaultProfileUtil.addDefaultProfile(app);
            Environment env = app.run(args).getEnvironment();
            log.info("\n----------------------------------------------------------\n\t" +
                            "Application '{}' is running! Access URLs:\n\t" +
                            "Local: \t\thttp://localhost:{}\n\t" +
                            "External: \thttp://{}:{}\n\t" +
                            "Profile(s): \t{}\n----------------------------------------------------------",
                    env.getProperty("spring.application.name"),
                    env.getProperty("server.port"),
                    InetAddress.getLocalHost().getHostAddress(),
                    env.getProperty("server.port"),
                    Arrays.toString(env.getActiveProfiles()));
        }


        @Override
        protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
            /**
             * set a default to use when no profile is configured.
             */
            DefaultProfileUtil.addDefaultProfile(application.application());
            return application.sources(PlatformscApplication.class);
        }

}
