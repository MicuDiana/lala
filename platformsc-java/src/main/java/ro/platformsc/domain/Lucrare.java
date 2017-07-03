
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
 * A Lucrare.
 */
@Entity
@Table(name = "T_LUCRARE")
public class Lucrare implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "titlu")
    private String titlu;

    @Column(name = "an_publicare")
    private Integer anPublicare;

    @Column(name = "numar_autori")
    private Integer numarAutori;

    @Column(name = "denumire")
    private String denumire;

    @Column(name = "factor_de_impact", precision=10, scale=2)
    private BigDecimal factorDeImpact;

    @Column(name = "issn")
    private String issn;

    @Column(name = "isbn")
    private String isbn;

    @Column(name = "editori")
    private String editori;

    @Column(name = "volum")
    private String volum;

    @Column(name = "numar")
    private String numar;

    @Column(name = "numar_pagini")
    private String numarPagini;

    @Column(name = "editura")
    private String editura;

    @Column(name = "wos")
    private String wos;

    @Column(name = "issn_jurnal")
    private String issnJurnal;

    @Column(name = "capitole")
    private String capitole;

    @Column(name = "rezultat")
    private String rezultat;

    @Column(name = "tip_lucrare")
    private String tipLucrare;

    @Column(name = "tip_brevet")
    private String tipBrevet;

    @Column(name = "qx")
    private String qx;

    @Column(name = "indexata_de")
    private String indexataDe;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "T_LUCRARE_T_CITARI",
            joinColumns = {@JoinColumn(name = "lucrare_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "citari_id", referencedColumnName = "id")})
    private Set<Citari> citaris = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "T_LUCRARE_T_CONFERINTA",
            joinColumns = {@JoinColumn(name = "lucrare_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "conferinta_id", referencedColumnName = "id")})
    private Set<Conferinta> conferintas = new HashSet<>();


    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitlu() {
        return titlu;
    }

    public void setTitlu(String titlu) {
        this.titlu = titlu;
    }

    public Integer getAnPublicare() {
        return anPublicare;
    }

    public void setAnPublicare(Integer anPublicare) {
        this.anPublicare = anPublicare;
    }

    public Integer getNumarAutori() {
        return numarAutori;
    }

    public void setNumarAutori(Integer numarAutori) {
        this.numarAutori = numarAutori;
    }

    public String getDenumire() {
        return denumire;
    }

    public void setDenumire(String denumire) {
        this.denumire = denumire;
    }

    public BigDecimal getFactorDeImpact() {
        return factorDeImpact;
    }

    public void setFactorDeImpact(BigDecimal factorDeImpact) {
        this.factorDeImpact = factorDeImpact;
    }

    public String getIssn() {
        return issn;
    }

    public void setIssn(String issn) {
        this.issn = issn;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getEditori() {
        return editori;
    }

    public void setEditori(String editori) {
        this.editori = editori;
    }

    public String getVolum() {
        return volum;
    }

    public void setVolum(String volum) {
        this.volum = volum;
    }

    public String getNumar() {
        return numar;
    }

    public void setNumar(String numar) {
        this.numar = numar;
    }

    public String getNumarPagini() {
        return numarPagini;
    }

    public void setNumarPagini(String numarPagini) {
        this.numarPagini = numarPagini;
    }

    public String getEditura() {
        return editura;
    }

    public void setEditura(String editura) {
        this.editura = editura;
    }

    public String getWos() {
        return wos;
    }

    public void setWos(String wos) {
        this.wos = wos;
    }

    public String getIssnJurnal() {
        return issnJurnal;
    }

    public void setIssnJurnal(String issnJurnal) {
        this.issnJurnal = issnJurnal;
    }

    public String getCapitole() {
        return capitole;
    }

    public void setCapitole(String capitole) {
        this.capitole = capitole;
    }

    public String getRezultat() {
        return rezultat;
    }

    public void setRezultat(String rezultat) {
        this.rezultat = rezultat;
    }

    public String getTipLucrare() {
        return tipLucrare;
    }

    public void setTipLucrare(String tipLucrare) {
        this.tipLucrare = tipLucrare;
    }

    public String getTipBrevet() {
        return tipBrevet;
    }

    public void setTipBrevet(String tipBrevet) {
        this.tipBrevet = tipBrevet;
    }

    public String getQx() {
        return qx;
    }

    public void setQx(String qx) {
        this.qx = qx;
    }

    public String getIndexataDe() {
        return indexataDe;
    }

    public void setIndexataDe(String indexataDe) {
        this.indexataDe = indexataDe;
    }


    public Set<Citari> getCitaris() {
        return citaris;
    }

    public void setCitaris(Set<Citari> citaris) {
        this.citaris = citaris;
    }

    public Set<Conferinta> getConferintas() {
        return conferintas;
    }

    public void setConferintas(Set<Conferinta> conferintas) {
        this.conferintas = conferintas;
    }


    //other entity methods relations

}
