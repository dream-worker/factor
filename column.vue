<template>
	<view class="h100-pt">
		<view class="wrap">
			<view class='list'>
				<view v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index" :class="index == 8?'item last-item':'item'">
					<view class="item-top">
						<text class="item-text">{{ index }}</text>
						<image></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		},

		computed: {},
		props: {},

		methods: {}
	};
</script>
<style lang="scss">
	.h100-pt {
		height: 100%;
	}

	.wrap {
		flex: 1;
		height: 100%;
		background-color: #F4F5F7;

		.list {
			margin: 0 32rpx;
			display: flex;
			flex-direction: row;
			// columns: 2;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				background-color: #ffffff;
				height: 180rpx;
				width: 332rpx;
				margin: 32rpx 0 0 0;
				display: flex;
				flex-direction: column;


			}

			.last-item {
				margin-bottom: 32rpx;
			}
		}

	}
</style>
