package ro.platformsc.config;

import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.annotation.Configuration;

import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import ro.teamnet.bootstrap.config.DatabaseConfiguration;
import ro.teamnet.bootstrap.extend.AppRepositoryFactoryBean;
import java.util.List;


@Configuration
@EnableJpaRepositories(basePackages = {"ro.platformsc.repository"},
        repositoryFactoryBeanClass = AppRepositoryFactoryBean.class)
public class PlatformscDatabaseConfiguration extends DatabaseConfiguration {

    private RelaxedPropertyResolver propertyResolver;
    private Environment env;

    @Override
    public void setEnvironment(Environment env) {
        setEnv(env);
        setPropertyResolver(new RelaxedPropertyResolver(env, "spring.platformscDatasource."));
    }
	
    @Override
    public List<String> getEntityPackagesToScan() {
        List<String> entityPackagesToScan = super.getEntityPackagesToScan();
        entityPackagesToScan.add("ro.platformsc");
        return entityPackagesToScan;
    }

    
}
