$(document).ready(function() {

    var moveCountTotal = 0;
    var moveCountStart = 1800;
    var counter = 0;
    var resultNum = 0;

    function drumResult(text, promo) {
        function drumResultInner() {
            $(".drum-result").html(text);
            $(".promo").html(promo);
            $(".drum-btn").removeAttr("disabled");
        }
        setTimeout(drumResultInner, 7200);
    }

    $('.drum-btn').click(function() {
        $(".drum-btn").attr("disabled", 'disabled');
        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }

        var num = randomInteger(1, 8);

        if (num == 1) {
            if (counter > 1) {
                if (resultNum == 1 || resultNum == 0) {
                    moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 45);
                }
				if (resultNum == 2) {
                    moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 45);
                }
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 45);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 45);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 45);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 45);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 45);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 45);
				}
            } else {
                moveCountTotal = moveCountTotal + (moveCountStart + 45);
            }

            resultNum = 1;
			drumResult('10%','M10410');
        }
		if (num == 2) {
			if (counter > 1) {
				if (resultNum == 2 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 90);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 90);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 90);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 90);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 90);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 90);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 90);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 90);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 90);
			}

			resultNum = 2;
			drumResult('Пирог с картошкой в подарок','545KAR');

		}
		if (num == 3) {
			if (counter > 1) {
				if (resultNum == 3 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 135);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 135);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 135);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 135);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 135);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 135);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 135);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 135);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 135);
			}

			resultNum = 3;
			drumResult('Попробуйте еще раз','');

		}

		if (num == 4) {
			if (counter > 1) {
				if (resultNum == 4 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 180);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 180);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 180);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 180);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 180);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 180);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 180);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 180);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 180);
			}

			resultNum = 4;
			drumResult('3%','B35403');

		}

		if (num == 5) {
			if (counter > 1) {
				if (resultNum == 5 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 225);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 225);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 225);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 225);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 225);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 225);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 225);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 225);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 225);
			}

			resultNum = 5;
			drumResult('5%','E58405');

		}

		if (num == 6) {
			if (counter > 1) {
				if (resultNum == 6 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 270);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 270);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 270);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 270);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 270);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 270);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 270);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 270);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 270);
			}

			resultNum = 6;
			drumResult('Пирог с капустой в подарок','2754KAP');

		}

		if (num == 7) {
			if (counter > 1) {
				if (resultNum == 7 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 315);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 315);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 315);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 315);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 315);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 315);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 315);
				}
				if (resultNum == 8) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 315);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 315);
			}

			resultNum = 7;
			drumResult('7%','A75407');

		}

		if (num == 8) {
			if (counter > 1) {
				if (resultNum == 8 || resultNum == 0) {
					moveCountTotal = (moveCountTotal - 360) + (moveCountStart + 360);
				}
				if (resultNum == 1) {
					moveCountTotal = (moveCountTotal - 45) + (moveCountStart + 360);
				}
				if (resultNum == 2) {
					moveCountTotal = (moveCountTotal - 90) + (moveCountStart + 360);
				}
				if (resultNum == 3) {
					moveCountTotal = (moveCountTotal - 135) + (moveCountStart + 360);
				}
				if (resultNum == 4) {
					moveCountTotal = (moveCountTotal - 180) + (moveCountStart + 360);
				}
				if (resultNum == 5) {
					moveCountTotal = (moveCountTotal - 225) + (moveCountStart + 360);
				}
				if (resultNum == 6) {
					moveCountTotal = (moveCountTotal - 270) + (moveCountStart + 360);
				}
				if (resultNum == 7) {
					moveCountTotal = (moveCountTotal - 315) + (moveCountStart + 360);
				}
			} else {
				moveCountTotal = moveCountTotal + (moveCountStart + 360);
			}

			resultNum = 8;
			drumResult('Попробуйте еще раз','');
		}

        counter++;

        moveStyle = 'rotate(' + moveCountTotal + 'deg)';
        $('#drum').css({
            'transform': moveStyle
        });
        counter++;

    });
});
