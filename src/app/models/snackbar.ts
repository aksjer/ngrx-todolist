export class SnackbarModel {
  opened: boolean;
  text: string;
  constructor(opened = false, text = null) {
    this.opened = opened;
    this.text = text;
  }
}
