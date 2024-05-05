package com.integrative.topics.integrativetopics.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "disciplineId")
public class Discipline {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long disciplineId;
    @Column(name = "d_name")
    private String name;
    @Column(name = "d_avg")
    private Double disciplineAverage;

    @ManyToOne(cascade = CascadeType.ALL ,fetch = FetchType.LAZY)
    @JoinColumn(name = "professor_id")
    @JsonIgnore
    private Professor professor;

    @OneToOne
    @JoinColumn(name = "discipline_team")
    @JsonIgnore
    private Team disciplinesTeam;


}