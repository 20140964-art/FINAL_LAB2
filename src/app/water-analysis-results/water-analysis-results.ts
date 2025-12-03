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
templateUrl: './water-analysis-results.html',
styleUrls: ['./water-analysis-results.css']
})
export class WaterAnalysisResults{
title = signal('Water Analysis Results');
Date = signal<Date | null>(null)
sourceAddress = signal('');
waterStatus = signal('');
remarks = signal('');




water_analysis_results: any[] = [];




constructor(private firestore: Firestore) {
const Collection = collection(this.firestore, 'water_analysis_result');
collectionData(Collection, { idField: 'id' })
.subscribe(data => {
this.water_analysis_results = data; // Assign to array so Angular detects changes
});
}


addPatient() {
const Date = this.Date();
const Name = this.sourceAddress();
const status = this.waterStatus();
const remarks = this.remarks();

if (Name && Date) {
const patientCollection = collection(this.firestore, 'water_analysis_result');
addDoc(patientCollection, { Date, Name, status, remarks });
this.Date.set(null);
this.sourceAddress.set('');
this.waterStatus.set('');
this.remarks.set('');
}
}

deletePatient(id: string) {
const patientDoc = doc(this.firestore, `water_analysis_result/${id}`);
deleteDoc(patientDoc);
}

updatePatient(
  id: string,
  newDate: Date,
  newName: string,
  newStatus: string,
  newRemarks: string,
) {
  const patientDoc = doc(this.firestore, `water_analysis_result/${id}`);
  updateDoc(patientDoc, { 
    Date: newDate,       
    Name: newName,
    status: newStatus,
    remarks: newRemarks
  });
}

}
