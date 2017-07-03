
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
 * A OrganizareConferinte.
 */
@Entity
@Table(name = "T_ORGANIZARE_CONFERINTE")
public class OrganizareConferinte implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "calitatea")
    private String calitatea;

    @ManyToOne
    private Persoana persoana;

    @OneToOne(mappedBy = "organizareConferinte", fetch = FetchType.LAZY)
    @JsonIgnore private Conferinta conferinta;


    
    //other entity fields relations

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCalitatea() {
        return calitatea;
    }

    public void setCalitatea(String calitatea) {
        this.calitatea = calitatea;
    }

    public Persoana getPersoana() {
        return persoana;
    }

    public void setPersoana(Persoana persoana) {
        this.persoana = persoana;
    }

    public Conferinta getConferinta() {
        return conferinta;
    }

    public void setConferinta(Conferinta conferinta) {
        this.conferinta = conferinta;
    }


    //other entity methods relations

}
