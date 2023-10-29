import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [
    // { task: 'Minha nova task', checked: true },
    // { task: 'Minha nova task 2', checked: false },
  ];

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public setEmitTaskList(event: string) {
    console.log(event);
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');
    if (confirm) this.taskList = [];
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('A task está vazia. Deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
