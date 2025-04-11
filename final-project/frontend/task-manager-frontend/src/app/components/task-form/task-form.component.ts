import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  task: Task = {
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (!this.task.title) return;
    this.taskService.createTask(this.task).subscribe(() => {
      window.location.reload();
    });
  }
}
