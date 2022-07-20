import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, Subject, take, takeUntil, skip } from 'rxjs';
import { IPlayer } from 'src/Interfaces/ISheet';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-player-traits',
  templateUrl: './player-traits.component.html',
  styleUrls: ['./player-traits.component.scss'],
})
export class PlayerTraitsComponent implements OnInit, OnDestroy {
  @Input() data: any;
  playerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    sparkEffect: new FormControl(''),
    origin: new FormControl('', Validators.required),
    currentLife: new FormControl(0, Validators.required),
    totalLife: new FormControl(0, Validators.required),
    currentStability: new FormControl(0, Validators.required),
    totalStability: new FormControl(0, Validators.required),
    defence: new FormControl(false, Validators.required),
  });

  counterAttacks = [false, false, false];

  private unsubscribe$ = new Subject<void>();

  constructor(private utilService: UtilService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.init();
    this.onFormInit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onFormInit() {
    this.playerForm?.valueChanges.pipe(debounceTime(500), takeUntil(this.unsubscribe$)).subscribe(() => {
      this.utilService.changePlayer(this.playerForm.value as IPlayer);
    });
  }

  init(): void {
    this.utilService.player
      .pipe(takeUntil(this.unsubscribe$), skip(1), take(1))
      .subscribe((player: IPlayer) => {
        this.playerForm.get('name')?.setValue(player?.name as string);
        this.playerForm.get('sparkEffect')?.setValue(player?.sparkEffect as string);
        this.playerForm.get('origin')?.setValue(player?.origin as string);
        this.playerForm.get('currentLife')?.setValue(player?.currentLife as number);
        this.playerForm.get('totalLife')?.setValue(player?.totalLife as number);
        this.playerForm.get('currentStability')?.setValue(player?.currentStability as number);
        this.playerForm.get('totalStability')?.setValue(player?.totalStability as number);
        this.playerForm.get('defence')?.setValue((player?.defence as boolean) || false);
      });
  }

  changeCounterAttack(index: number): void {
    this.counterAttacks[index] = !this.counterAttacks[index];
  }

  changeValue(msg: string, form: string) {
    const value = prompt(`Please enter your value of ${msg} in NUMBERS please`);
    if (value != null && parseInt(value) < 99 && parseInt(value) > 0) {
      this.playerForm.get(form)?.setValue(value as string);
    } else {
      this.toastr.error(`Precisa ser um número entre 0 e 99`, 'Inválido');
    }
  }

  addLife(): void {
    // @ts-ignore
    this.playerForm.get('currentLife')!.setValue((this.playerForm.get('currentLife').value + 1) as number);
  }

  removeLife(): void {
    // @ts-ignore
    this.playerForm.get('currentLife')?.setValue(parseInt(this.playerForm.get('currentLife')?.value) - 1);
  }

  addStability(): void {
    // @ts-ignore
    this.playerForm.get('currentStability')?.setValue(this.playerForm.get('currentStability')?.value + 1);
  }

  removeStability(): void {
    // @ts-ignore
    this.playerForm.get('currentStability')?.setValue(this.playerForm.get('currentStability')?.value - 1);
  }
}
