package com.codecool.travelhelper.aws.database.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@ToString
@NoArgsConstructor
public class VisitedPlaceTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "visited_place_id")
    private Long id;

    private String country;
    private String city;

//------------------------------------------------

    // visitedPlaces to user
    @ManyToOne
    @JoinColumn(name = "user_id")
    private MyUserTable myUserTable;


//------------------------------------------------


    public VisitedPlaceTable(String country, String city) {
        this.country = country;
        this.city = city;
    }
}
