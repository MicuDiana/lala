package ro.platformsc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.SimpleCommandLinePropertySource;
import ro.teamnet.bootstrap.config.DatabaseConfiguration;

/**
 * Configuration class for testing   module.
 */
@Configuration
@ComponentScan({"ro.teamnet.bootstrap", "ro.platformsc"})
@EnableAutoConfiguration(exclude = DatabaseConfiguration.class)
public class TestApplication {


    /**
     * Main method, used to run the application.
     */
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(TestApplication.class);


        SimpleCommandLinePropertySource source = new SimpleCommandLinePropertySource(args);

        // Check if the selected profile has been set as argument.
        // if not the development profile will be added
        addDefaultProfile(app, source);
        addLiquibaseScanPackages();
        app.run(args);
    }

    /**
     * Set a default profile if it has not been set
     */
    protected static void addDefaultProfile(SpringApplication app, SimpleCommandLinePropertySource source) {
        if (!source.containsProperty("spring.profiles.active")) {
            app.setAdditionalProfiles("test-");
        }
    }

    /**
     * Set the liquibases.scan.packages to avoid an exception from ServiceLocator.
     */
    protected static void addLiquibaseScanPackages() {
        System.setProperty("liquibase.scan.packages", "liquibase.change" + "," + "liquibase.database" + "," +
                "liquibase.parser" + "," + "liquibase.precondition" + "," + "liquibase.datatype" + "," +
                "liquibase.serializer" + "," + "liquibase.sqlgenerator" + "," + "liquibase.executor" + "," +
                "liquibase.snapshot" + "," + "liquibase.logging" + "," + "liquibase.diff" + "," +
                "liquibase.structure" + "," + "liquibase.structurecompare" + "," + "liquibase.lockservice" + "," +
                "liquibase.ext" + "," + "liquibase.changelog");
    }
}