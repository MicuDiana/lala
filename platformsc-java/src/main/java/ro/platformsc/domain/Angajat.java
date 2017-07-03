
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
 * A Angajat.
 */
@Entity
@Table(name = "T_ANGAJAT")
public class Angajat implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "grad_stiintific")
    private String gradStiintific;

    @Column(name = "grad_didactic")
    private String gradDidactic;

    @Column(name = "facultate_absolvita")
    private String facultateAbsolvita;

    @Column(name = "specializare")
    private String specializare;

    @Column(name = "are_doctorat")
    private Boolean areDoctorat;

    @Column(name = "data_incepere_doctorat")
    private LocalDate dataIncepereDoctorat;

    @Column(name = "data_finalizare_doctorat")
    private LocalDate dataFinalizareDoctorat;

    @Column(name = "titlu_teza_doctorat")
    private String titluTezaDoctorat;

    @Column(name = "universitate_doctorat")
    private String universitateDoctorat;

    @Column(name = "coordonator_doctorat")
    private Boolean coordonatorDoctorat;

    @Column(name = "competente")
    private String competente;

    @Column(name = "domenii_de_interes")
    private String domeniiDeInteres;

    @Column(name = "cursuri_specializare")
    private String cursuriSpecializare;

    @Column(name = "certificari")
    private String certificari;

    @Column(name = "alte_informatii")
    private String alteInformatii;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "T_ANGAJAT_T_LIMBA_STRAINA",
            joinColumns = {@JoinColumn(name = "angajat_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "limba_straina_id", referencedColumnName = "id")})
    private Set<LimbaStraina> limbaStrainas = new HashSet<>();

    @OneToOne(mappedBy = "angajat", fetch = FetchType.LAZY)
    @JsonIgnore private Persoana persoana;

    @OneToMany(mappedBy = "angajat", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<MembruRedactie> membruRedacties = new HashSet<>();


    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGradStiintific() {
        return gradStiintific;
    }

    public void setGradStiintific(String gradStiintific) {
        this.gradStiintific = gradStiintific;
    }

    public String getGradDidactic() {
        return gradDidactic;
    }

    public void setGradDidactic(String gradDidactic) {
        this.gradDidactic = gradDidactic;
    }

    public String getFacultateAbsolvita() {
        return facultateAbsolvita;
    }

    public void setFacultateAbsolvita(String facultateAbsolvita) {
        this.facultateAbsolvita = facultateAbsolvita;
    }

    public String getSpecializare() {
        return specializare;
    }

    public void setSpecializare(String specializare) {
        this.specializare = specializare;
    }

    public Boolean getAreDoctorat() {
        return areDoctorat;
    }

    public void setAreDoctorat(Boolean areDoctorat) {
        this.areDoctorat = areDoctorat;
    }

    public LocalDate getDataIncepereDoctorat() {
        return dataIncepereDoctorat;
    }

    public void setDataIncepereDoctorat(LocalDate dataIncepereDoctorat) {
        this.dataIncepereDoctorat = dataIncepereDoctorat;
    }

    public LocalDate getDataFinalizareDoctorat() {
        return dataFinalizareDoctorat;
    }

    public void setDataFinalizareDoctorat(LocalDate dataFinalizareDoctorat) {
        this.dataFinalizareDoctorat = dataFinalizareDoctorat;
    }

    public String getTitluTezaDoctorat() {
        return titluTezaDoctorat;
    }

    public void setTitluTezaDoctorat(String titluTezaDoctorat) {
        this.titluTezaDoctorat = titluTezaDoctorat;
    }

    public String getUniversitateDoctorat() {
        return universitateDoctorat;
    }

    public void setUniversitateDoctorat(String universitateDoctorat) {
        this.universitateDoctorat = universitateDoctorat;
    }

    public Boolean getCoordonatorDoctorat() {
        return coordonatorDoctorat;
    }

    public void setCoordonatorDoctorat(Boolean coordonatorDoctorat) {
        this.coordonatorDoctorat = coordonatorDoctorat;
    }

    public String getCompetente() {
        return competente;
    }

    public void setCompetente(String competente) {
        this.competente = competente;
    }

    public String getDomeniiDeInteres() {
        return domeniiDeInteres;
    }

    public void setDomeniiDeInteres(String domeniiDeInteres) {
        this.domeniiDeInteres = domeniiDeInteres;
    }

    public String getCursuriSpecializare() {
        return cursuriSpecializare;
    }

    public void setCursuriSpecializare(String cursuriSpecializare) {
        this.cursuriSpecializare = cursuriSpecializare;
    }

    public String getCertificari() {
        return certificari;
    }

    public void setCertificari(String certificari) {
        this.certificari = certificari;
    }

    public String getAlteInformatii() {
        return alteInformatii;
    }

    public void setAlteInformatii(String alteInformatii) {
        this.alteInformatii = alteInformatii;
    }

    public Set<LimbaStraina> getLimbaStrainas() {
        return limbaStrainas;
    }

    public void setLimbaStrainas(Set<LimbaStraina> limbaStrainas) {
        this.limbaStrainas = limbaStrainas;
    }

    public Persoana getPersoana() {
        return persoana;
    }

    public void setPersoana(Persoana persoana) {
        this.persoana = persoana;
    }

    public Set<MembruRedactie> getMembruRedacties() {
        return membruRedacties;
    }

    public void setMembruRedacties(Set<MembruRedactie> membruRedacties) {
        this.membruRedacties = membruRedacties;
    }


    //other entity methods relations

}
