import Person from "@/components/Person";
import { students } from "@/data/students";
import { Component, ReactNode } from "react";

export default function PersonList() {
    return (
        <>
            {students.map((i) => (
                <Person
                    id={i.id}
                    active={i.active}
                    name={i.name}
                    avatar={i.avatar}
                    email={i.email}
                    grade1={i.grade1}
                    grade2={i.grade2}
                />
            ))}
        </>
    );
}
