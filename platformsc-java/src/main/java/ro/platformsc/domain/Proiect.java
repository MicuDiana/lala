
package ro.platformsc.domain; 

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Type;
import java.time.*;




    
import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

/**
 * A Proiect.
 */
@Entity
@Table(name = "T_PROIECT")
public class Proiect implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "tip_proiect")
    private String tipProiect;

    @Column(name = "titlu")
    private String titlu;

    @Column(name = "acronim")
    private String acronim;

    @Column(name = "data_incepere")
    private LocalDate dataIncepere;

    @Column(name = "data_finalizare")
    private LocalDate dataFinalizare;

    @Column(name = "beneficiar")
    private String beneficiar;

    @Column(name = "program")
    private String program;

    @Column(name = "numar_contract")
    private String numarContract;

    @Column(name = "coordonator")
    private String coordonator;

    @Column(name = "calitate")
    private String calitate;

    @Column(name = "parteneri")
    private String parteneri;

    @Column(name = "site_web")
    private String siteWeb;

    @OneToMany(mappedBy = "proiect", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Persoana> persoanas = new HashSet<>();


    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipProiect() {
        return tipProiect;
    }

    public void setTipProiect(String tipProiect) {
        this.tipProiect = tipProiect;
    }

    public String getTitlu() {
        return titlu;
    }

    public void setTitlu(String titlu) {
        this.titlu = titlu;
    }

    public String getAcronim() {
        return acronim;
    }

    public void setAcronim(String acronim) {
        this.acronim = acronim;
    }

    public LocalDate getDataIncepere() {
        return dataIncepere;
    }

    public void setDataIncepere(LocalDate dataIncepere) {
        this.dataIncepere = dataIncepere;
    }

    public LocalDate getDataFinalizare() {
        return dataFinalizare;
    }

    public void setDataFinalizare(LocalDate dataFinalizare) {
        this.dataFinalizare = dataFinalizare;
    }

    public String getBeneficiar() {
        return beneficiar;
    }

    public void setBeneficiar(String beneficiar) {
        this.beneficiar = beneficiar;
    }

    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public String getNumarContract() {
        return numarContract;
    }

    public void setNumarContract(String numarContract) {
        this.numarContract = numarContract;
    }

    public String getCoordonator() {
        return coordonator;
    }

    public void setCoordonator(String coordonator) {
        this.coordonator = coordonator;
    }

    public String getCalitate() {
        return calitate;
    }

    public void setCalitate(String calitate) {
        this.calitate = calitate;
    }

    public String getParteneri() {
        return parteneri;
    }

    public void setParteneri(String parteneri) {
        this.parteneri = parteneri;
    }

    public String getSiteWeb() {
        return siteWeb;
    }

    public void setSiteWeb(String siteWeb) {
        this.siteWeb = siteWeb;
    }

    public Set<Persoana> getPersoanas() {
        return persoanas;
    }

    public void setPersoanas(Set<Persoana> persoanas) {
        this.persoanas = persoanas;
    }


    //other entity methods relations

}
