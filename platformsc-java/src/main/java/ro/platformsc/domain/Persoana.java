
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
 * A Persoana.
 */
@Entity
@Table(name = "T_PERSOANA")
public class Persoana implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nume")
    private String nume;

    @Column(name = "prenume")
    private String prenume;

    @Column(name = "email")
    private String email;




    @OneToOne(mappedBy = "persoana", fetch = FetchType.LAZY)
    @JsonIgnore private Angajat angajat;

    @ManyToMany
    @JoinTable(
            name = "T_PERSOANA_T_LUCRARE",
            joinColumns = {@JoinColumn(name = "persoana_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "lucrare_id", referencedColumnName = "id")})
    private Set<Lucrare> lucrares = new HashSet<>();

    @OneToMany(mappedBy = "persoana", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Premiu> premius = new HashSet<>();

    @OneToMany(mappedBy = "persoana", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<OrganizareConferinte> organizareConferintes = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(
            name = "T_PERSOANA_T_MEMBRU_ASOC_PROF",
            joinColumns = {@JoinColumn(name = "persoana_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "membru_asoc_prof_id", referencedColumnName = "id")})
    private Set<MembruAsocProf> membruAsocProfs = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER)
    private Proiect proiect;


    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Angajat getAngajat() {
        return angajat;
    }

    public void setAngajat(Angajat angajat) {
        this.angajat = angajat;
    }

    public Set<Lucrare> getLucrares() {
        return lucrares;
    }

    public void setLucrares(Set<Lucrare> lucrares) {
        this.lucrares = lucrares;
    }

    public Set<Premiu> getPremius() {
        return premius;
    }

    public void setPremius(Set<Premiu> premius) {
        this.premius = premius;
    }

    public Set<OrganizareConferinte> getOrganizareConferintes() {
        return organizareConferintes;
    }

    public void setOrganizareConferintes(Set<OrganizareConferinte> organizareConferintes) {
        this.organizareConferintes = organizareConferintes;
    }

    public Set<MembruAsocProf> getMembruAsocProfs() {
        return membruAsocProfs;
    }

    public void setMembruAsocProfs(Set<MembruAsocProf> membruAsocProfs) {
        this.membruAsocProfs = membruAsocProfs;
    }

    public Proiect getProiect() {
        return proiect;
    }

    public void setProiect(Proiect proiect) {
        this.proiect = proiect;
    }


    //other entity methods relations

}
