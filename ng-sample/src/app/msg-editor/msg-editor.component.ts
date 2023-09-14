import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';

import SvgCanvas from '@svgedit/svgcanvas';

@Component({
  selector: 'app-msg-editor',
  templateUrl: './msg-editor.component.html',
  styleUrls: ['./msg-editor.component.css'],
})
export class MsgEditorComponent implements OnInit {
  canvas: any;



  @ViewChild('container') public containerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('text') text!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSvgCanvas();
    this.initTextInputTool();

    this.canvas.bind('changed', () => {
      console.log('canvas changed');
      //this.textChanged();
    });

    //this.canvas.clear(); // clear Canvas first
    //this.canvas.setTextContent("ddddd");
    // this.canvas.setSvgString(xml); // load file into editor

    console.log(this.canvas);

    const hiddenTextTag = this.canvas.$id('text');
    // @ts-ignore
    //this.canvas.textActions.setInputElem(hiddenTextTag);
  }

  textChanged(): void {
    console.log('textchanged');
  }

  //intialization

  private initSvgCanvas(): void {

    const dimensions: any = { width: 600, height: 300 };

    const config = {
      initFill: { color: 'FFFFFF', opacity: 1 },
      initStroke: { color: '000000', opacity: 1, width: 1 },
      text: { stroke_width: 0, font_size: 24, font_family: 'serif' },
      initOpacity: 1,
      imgPath: '/src/editor/images',
      dimensions: [dimensions.width, dimensions.height],
      baseUnit: 'px',
      show_outside_canvas: false

    };

    this.canvas = new SvgCanvas(this.containerEl.nativeElement, config);
    this.canvas.updateCanvas(dimensions.width, dimensions.height);
    // Make background transparent
    // const bg = this.canvas.getElement('canvasBackground');
    // this.canvas.assignAttributes(bg.children[0], { fill: '#FFF0', stroke: '#FFF0' });

    // this.updateEditorSize(this.messageEditorRepository.getEditorSize());
  }

  private initTextInputTool(): void {
    const hiddenTextTag = this.canvas.$id('text');
    this.canvas.textActions.setInputElem(hiddenTextTag);

    const addListenerMulti = (
      element: HTMLElement,
      eventNames: string,
      listener: (evt: any) => void
    ) => {
      eventNames
        .split(' ')
        .forEach((eventName: any) =>
          element.addEventListener(eventName, listener, false)
        );
    };

    addListenerMulti(hiddenTextTag, 'keyup input', (evt) => {
      console.log('keyup input', evt.currentTarget.value);
      this.canvas.setTextContent(evt.currentTarget.value);
    });

      // Listen to focus and perform click to trigger the keyboard.
      addListenerMulti(hiddenTextTag, 'focusin', () => {
        // @ts-ignore
        hiddenTextTag.click();
    });
  }

  setSelect() {
    this.canvas.setMode('select');
  }

  setCircle() {
    this.canvas.setMode('circle');
  }
  setRect() {
    this.canvas.setMode('rect');
  }

  setText() {
    this.canvas.setMode('text');
  }

  setLine() {
    this.canvas.setMode('line');
  }

  fillRed() {
    this.fill('#ff0000');
  }

  fill(colour: any) {
    var selected = this.canvas.getSelectedElements();
    for (var i = 0, el; (el = selected[i]); i++) {
      el.setAttribute('fill', colour);
    }
  }

  deleteSelectedElements() {
    this.canvas.deleteSelectedElements();
  }

  clearAll() {
    this.canvas.clear();
  }

  getSVG() {
    alert(this.canvas.getSvgString());
  }


  createLayer(){
    const uniqueId = (length=16) => {
      return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
    }


    this.canvas.createLayer(uniqueId(3));
  }


}
