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
templateUrl: './daily-service-record.html',
styleUrls: ['./daily-service-record.css']
})
export class DailyServiceRecord {
title = signal('Daily Service Record');
Date = signal<Date | null>(null)
patientName = signal('');
age = signal<number | null>(null);
gender = signal('');
sicknessDiagnosed = signal('');
treatmentProvided = signal('');
attendingPhysician = signal('')




daily_service_records: any[] = [];




constructor(private firestore: Firestore) {
const Collection = collection(this.firestore, 'daily_service_record');
collectionData(Collection, { idField: 'id' })
.subscribe(data => {
this.daily_service_records = data; // Assign to array so Angular detects changes
});
}


addPatient() {
const Date = this.Date();
const Name = this.patientName();
const age = this.age();
const gender = this.gender();
const sickness = this.sicknessDiagnosed();
const treatment = this.treatmentProvided();
const physician = this.attendingPhysician();

if (Name && Date) {
const patientCollection = collection(this.firestore, 'daily_service_record');
addDoc(patientCollection, { Date, Name, age, gender,sickness, treatment, physician });
this.Date.set(null);
this.patientName.set('');
this.age.set(null);
this.gender.set('');
this.sicknessDiagnosed.set('');
this.treatmentProvided.set('');
this.attendingPhysician.set('');
}
}

deletePatient(id: string) {
const patientDoc = doc(this.firestore, `daily_service_record/${id}`);
deleteDoc(patientDoc);
}

updatePatient(
  id: string,
  newDate: Date,
  newName: string,
  newAge: number,
  newGender: string,
  newSD: string,
  newTP: string,
  newAP: string
) {
  const patientDoc = doc(this.firestore, `daily_service_record/${id}`);
  updateDoc(patientDoc, { 
    Date: newDate,        // ✔ FIXED capitalization
    Name: newName,
    age: newAge,
    gender: newGender,
    sickness: newSD,
    treatment: newTP,
    physician: newAP
  });
}

}
