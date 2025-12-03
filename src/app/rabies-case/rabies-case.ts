import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc } from
'@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, FormsModule,RouterModule],
templateUrl: './rabies-case.html',
styleUrls: ['./rabies-case.css']
})
export class RabiesCase {
title = signal('Daily Service Record');
Date = signal<Date | null>(null)
patientName = signal('');
age = signal<number | null>(null);
gender = signal('');
animalType = signal('');
rabiesStatus = signal('');
treatmentGiven = signal('')




rabies_cases: any[] = [];




constructor(private firestore: Firestore) {
const Collection = collection(this.firestore, 'rabies_case');
collectionData(Collection, { idField: 'id' })
.subscribe(data => {
this.rabies_cases = data; // Assign to array so Angular detects changes
});
}


addPatient() {
const Date = this.Date();
const Name = this.patientName();
const age = this.age();
const gender = this.gender();
const animalType = this.animalType();
const rabiesStatus = this.rabiesStatus();
const treatmentGiven = this.treatmentGiven();

if (Name && Date) {
const patientCollection = collection(this.firestore, 'rabies_case');
addDoc(patientCollection, { Date, Name, age, gender,animalType,rabiesStatus,treatmentGiven });
this.Date.set(null);
this.patientName.set('');
this.age.set(null);
this.gender.set('');
this.animalType.set('');
this.rabiesStatus.set('');
this.treatmentGiven.set('');
}
}

deletePatient(id: string) {
const patientDoc = doc(this.firestore, `rabies_case/${id}`);
deleteDoc(patientDoc);
}

updatePatient(
  id: string,
  newDate: Date,
  newName: string,
  newAge: number,
  newGender: string,
  newAT: string,
  newRS: string,
  newTG: string
) {
  const patientDoc = doc(this.firestore, `rabies_case/${id}`);
  updateDoc(patientDoc, { 
    Date: newDate,        
    Name: newName,
    age: newAge,
    gender: newGender,
    animalType: newAT,
    rabiesStatus: newRS,
    treatmentGiven: newTG
  });
}

}
