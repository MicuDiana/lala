
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
 * A LimbaStraina.
 */
@Entity
@Table(name = "T_LIMBASTRAINA")
public class LimbaStraina implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "limba")
    private String limba;

    @Column(name = "ascultare")
    private String ascultare;

    @Column(name = "citire")
    private String citire;

    @Column(name = "conversatie")
    private String conversatie;

    @Column(name = "discurs")
    private String discurs;

    @Column(name = "scriere")
    private String scriere;



    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLimba() {
        return limba;
    }

    public void setLimba(String limba) {
        this.limba = limba;
    }

    public String getAscultare() {
        return ascultare;
    }

    public void setAscultare(String ascultare) {
        this.ascultare = ascultare;
    }

    public String getCitire() {
        return citire;
    }

    public void setCitire(String citire) {
        this.citire = citire;
    }

    public String getConversatie() {
        return conversatie;
    }

    public void setConversatie(String conversatie) {
        this.conversatie = conversatie;
    }

    public String getDiscurs() {
        return discurs;
    }

    public void setDiscurs(String discurs) {
        this.discurs = discurs;
    }

    public String getScriere() {
        return scriere;
    }

    public void setScriere(String scriere) {
        this.scriere = scriere;
    }



    //other entity methods relations

}
