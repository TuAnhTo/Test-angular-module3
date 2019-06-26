import {Component, OnInit} from '@angular/core';
import {IPost} from '../post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: IPost[] = [];
  bookForm: FormGroup;

  constructor(
    private bookService: PostService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      read: true,
    });
    this.bookService.getBooks().subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value).subscribe(next => {
        this.bookList.unshift(next);
        this.bookForm.reset({
          name: '',
          read: true
        });
      }, error => console.log(error));
    }
  }

  deleteBook(i) {
    const book = this.bookList[i];
    this.bookList = this.bookList.filter(t => t.id !== book.id);
  }
  readed(book: IPost) {
    book.read = true;
  }
}

