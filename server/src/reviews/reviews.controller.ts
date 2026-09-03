import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/CreateReview.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post('movies/:movieUuid/reviews')
  @UseGuards(JwtAuthGuard)
  create(
    @Param('movieUuid', ParseUUIDPipe) movieUuid: string,
    @Req() req,
    @Body() dto: CreateReviewDto,
  ) {
    return this.reviewsService.create(movieUuid, req.user.userId, dto);
  }
}
