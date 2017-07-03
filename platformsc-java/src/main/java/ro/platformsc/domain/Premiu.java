
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
 * A Premiu.
 */
@Entity
@Table(name = "T_PREMIU")
public class Premiu implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "international")
    private Boolean international;

    @Column(name = "emis_de_ar")
    private Boolean emisDeAR;

    @Column(name = "emis_de")
    private String emisDe;

    @Column(name = "tip_premiu")
    private String tipPremiu;

    @Column(name = "denumire_premiu")
    private String denumirePremiu;

    @Column(name = "emitent")
    private String emitent;

    @Column(name = "an")
    private Integer an;

    @ManyToOne
    private Persoana persoana;


    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getInternational() {
        return international;
    }

    public void setInternational(Boolean international) {
        this.international = international;
    }

    public Boolean getEmisDeAR() {
        return emisDeAR;
    }

    public void setEmisDeAR(Boolean emisDeAR) {
        this.emisDeAR = emisDeAR;
    }

    public String getEmisDe() {
        return emisDe;
    }

    public void setEmisDe(String emisDe) {
        this.emisDe = emisDe;
    }

    public Integer getAn() {
        return an;
    }

    public void setAn(Integer an) {
        this.an = an;
    }

    public String getTipPremiu() {
        return tipPremiu;
    }

    public void setTipPremiu(String tipPremiu) {
        this.tipPremiu = tipPremiu;
    }

    public String getDenumirePremiu() {
        return denumirePremiu;
    }

    public void setDenumirePremiu(String denumirePremiu) {
        this.denumirePremiu = denumirePremiu;
    }

    public String getEmitent() {
        return emitent;
    }

    public void setEmitent(String emitent) {
        this.emitent = emitent;
    }

    public Persoana getPersoana() {
        return persoana;
    }

    public void setPersoana(Persoana persoana) {
        this.persoana = persoana;
    }


    //other entity methods relations

}
