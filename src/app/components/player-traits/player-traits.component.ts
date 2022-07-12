import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subject, take, takeUntil, skip } from 'rxjs';
import { IPlayer } from 'src/Interfaces/ISheet';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-player-traits',
  templateUrl: './player-traits.component.html',
  styleUrls: ['./player-traits.component.scss'],
})
export class PlayerTraitsComponent implements OnInit {
  @Input() data: any;
  playerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    sparkEffect: new FormControl(''),
    origin: new FormControl('', Validators.required),
    currentLife: new FormControl(1432, Validators.required),
    totalLife: new FormControl(143, Validators.required),
    currentStability: new FormControl(14, Validators.required),
    totalStability: new FormControl(141, Validators.required),
    defence: new FormControl(false, Validators.required),
  });

  counterAttacks = [false, false, false];

  private unsubscribe$ = new Subject<void>();

  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.init();
    this.onFormInit();
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
        console.log(player);
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
}
