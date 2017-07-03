package ro.platformsc.config;

import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.view.jasperreports.JasperReportsMultiFormatView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsViewResolver;
import ro.teamnet.bootstrap.config.DatabaseConfiguration;
import ro.teamnet.bootstrap.extend.AppRepositoryFactoryBean;

import javax.sql.DataSource;
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

    @Bean
    public JasperReportsViewResolver getJasperReportsViewResolver(DataSource dataSource) {
        JasperReportsViewResolver resolver = new JasperReportsViewResolver();

        resolver.setPrefix("classpath:/reports/");
        resolver.setSuffix(".jasper");
        resolver.setJdbcDataSource(dataSource);
        resolver.setViewNames("report*");
        resolver.setViewClass(JasperReportsMultiFormatView.class);
        resolver.setOrder(0);
        return resolver;
    }

    
}
