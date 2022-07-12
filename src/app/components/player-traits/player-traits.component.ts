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
    currentLife: new FormControl('14', Validators.required),
    totalLife: new FormControl('14', Validators.required),
    currentStability: new FormControl('14', Validators.required),
    totalStability: new FormControl('14', Validators.required),
    faLevel: new FormControl('C', Validators.required),
  });

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
    this.utilService.player.pipe(takeUntil(this.unsubscribe$), skip(1), take(1)).subscribe((player) => {
      console.log(player);
      this.playerForm.get('name')?.setValue(player?.name as string);
      this.playerForm.get('sparkEffect')?.setValue(player?.sparkEffect as string);
      this.playerForm.get('origin')?.setValue(player?.origin as string);
    });
  }
}
