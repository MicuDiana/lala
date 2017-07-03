package ro.platformsc.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.jasperreports.AbstractJasperReportsSingleFormatView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsPdfView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsXlsxView;

import javax.inject.Inject;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

/**
 * Developer: Viorelt
 * <p>
 * Copyright (c) 2017 Teamnet International. All Rights Reserved.
 * <p>
 * This source file may not be copied, modified or redistributed,
 * in whole or in part, in any form or for any reason, without the express
 * written consent of Teamnet International.
 **/
@Controller
@RequestMapping("/app")
public class ConfReportResource {
    private final ApplicationContext applicationContext;

    private final DataSource dataSource;

    @Inject
    public ConfReportResource(ApplicationContext applicationContext, DataSource dataSource) {
        this.applicationContext = applicationContext;
        this.dataSource = dataSource;
    }

    @RequestMapping(path = "/pdf", method = RequestMethod.GET)
    public ModelAndView reportPdf() {
        JasperReportsPdfView view = new JasperReportsPdfView();
        return getModelAndView(view);
    }

    @RequestMapping(path = "/xlsx", method = RequestMethod.GET)
    public ModelAndView reportXlsx() {
        JasperReportsXlsxView view=new JasperReportsXlsxView();
        return getModelAndView(view);
    }

    private ModelAndView getModelAndView(AbstractJasperReportsSingleFormatView view) {

        view.setUrl("classpath:reports/conf.jrxml");
        view.setApplicationContext(applicationContext);
        view.setJdbcDataSource(dataSource);

        Map<String, Object> params = new HashMap<>();
//        params.put("datasource", carService.findAll());

        return new ModelAndView(view, params);
    }


}
